<?php

/*
Plugin Name: Content Tooltip
Plugin URI: http://codenegar.com/go/ctt
Description: Unlimited tooltips with custom HTML contents, any
Author: Farhad Ahmadi
Version: 2.5.1
Author URI: http://codenegar.com/
*/

class CodeNegar_ctt {

	public $version = '20150715';
	public $file = '';
	public $path;
	public $url;
	public $html; // CodeNegar_ctt_html object
	public $helper; // CodeNegar_ctt_helper object
	public $text_domain = 'codenegar-ctt';

	function __construct() {
		$this->url = WP_PLUGIN_URL . "/" . plugin_basename( dirname(__FILE__)) . '/';
		$this->file = __FILE__;
		$this->path = dirname($this->file) . '/';
		require_once($this->path . 'functions.php');
		require_once($this->path . 'helper.php');
		require_once($this->path . 'html.php');
		$this->html = new CodeNegar_ctt_html();
		$this->helper = new CodeNegar_ctt_helper();
	}
	
	function initialize(){
		$this->add_post_type();
		add_filter('widget_text', 'do_shortcode');
		add_shortcode('content_tooltip',  array($this, 'shortcode'));
		require_once($this->path . 'metabox/tooltip.php');
		add_filter('widget_text', 'do_shortcode'); // Enables using shortcode in text widget
	}

	function wpcf7_handler(){
		if (function_exists('wpcf7_add_shortcode')) {
			wpcf7_add_shortcode('content_tooltip', array($this,'wpcf7_shortcode'), false );
		}
	}

	function wpcf7_shortcode($tag){
		$tag = (array) $tag;
		if(isset($tag['attr']) && !empty($tag['attr'])){
			// Replace space with & to get a better parse
			$tag['attr'] = str_replace(' ', '&', $tag['attr']);
			$atts = array();
			parse_str($tag['attr'], $atts);
			if(is_array($atts) && isset($atts['id'])){
				$atts['id'] = preg_replace("/[^0-9]/","",$atts['id']);
				return do_shortcode('[content_tooltip id="' . $atts['id'] . '"]');
			}
		}
		if(isset($tag['options'][0]) && isset($tag['values'][0])){
			return do_shortcode('[content_tooltip id="' . intval($tag['values'][0]) . '"]');
		}
		return '';
	}

	function shortcode($atts){
		extract(
			shortcode_atts(
				array('id' => 0)
				,$atts
			)
		);
		if(!$id){
			return;
		}
		$post = get_post($id);
		if($post){
			$post_custom = get_post_custom($post->ID);
			$post_custom = $this->helper->clean_meta($post_custom);
			$defaults = $this->helper->default_options();
			// unset checkboxes so users values are used
			unset($defaults['_cnctt_auto_adjust']); unset($defaults['_cnctt_enable_expiration']);
			$post_custom = codenegar_parse_args($post_custom, $defaults); // merging with default options
			if($post->post_status != 'publish'){ // tooltip is draft or something
				return;
			}
			
			if(isset($post_custom['_cnctt_enable_expiration']) && $post_custom['_cnctt_enable_expiration'] == 'on' && time() > intval($post_custom['_cnctt_expire_timestamp'])){
				return $post_custom['_cnctt_expire_text']; // expiration is on and tooltip is expired, so return expired text.
			}
			
			$post_title = $post->post_title;
			$post_content = (isset($post->post_content))? do_shortcode($post->post_content) : '';
			if($post_custom['_cnctt_element_type'] == 'print_html'){
				return $post_content; // Using plugin as a snippet/reusable content/ ad manager tool
			}
			
			return $this->html->get_html($post->ID, $post_title, $post_content, $post_custom);
		}
		return; // If post is invalid return nothing
	}

	function activate() {
		
	}
	
	function plugins_loaded(){
		load_plugin_textdomain( $this->text_domain, false, $this->path . 'languages/');
	}
	
	function add_post_type() {
	
		// Labels
		$labels = array(
				'name'          => __('Tooltips', $this->text_domain),
				'singular_name' => __('Tooltip', $this->text_domain),
				'add_new'       => __('Add Tooltip', $this->text_domain),
				'all_items'     => __('All Tooltips', $this->text_domain),
				'add_new_item'  => __('Add Tooltip', $this->text_domain),
				'edit_item'     => __('Edit Tooltip', $this->text_domain),
				'new_item'      => __('New Tooltip', $this->text_domain),
				'view_item'     => __('View Tooltip', $this->text_domain),
				'search_items'  => __('Search Tooltips', $this->text_domain),
				'not_found'     => __('No Tooltips Found', $this->text_domain)
		);
		
		// Settings
		$settings = array(
				'labels'               => $labels,
				'description'          => __('Add unlimited labels with related information and HTML content', $this->text_domain),
				'public'               => true,
				'show_ui'              => true,
				'menu_icon'            => $this->url .'images/tooltip.png',
				'show_in_menu'         => true,
				'capability_type'      => 'post',
				'has_archive'          => false,
				'hierarchical'         => false,
				'exclude_from_search'  => true,
				'publicly_queryable'   => true,
				'show_in_nav_menus'    => false,
				'show_in_admin_bar'    => false,
				'can_export'    	   => true,
				'supports'             => array('title', 'editor')
		);
		
		// Register the actual post type
		register_post_type('content_tooltip', $settings);
	}

	function shortcode_column($columns) {
		$columns['shortcode'] = __('ShortCode', $this->text_domain);
		return $columns;
	}
	
	public function register_frontend_assets(){
		// Add frontend assets in footer
		wp_register_style('codenegar-tooltip-style', $this->url . 'css/smallipop.css');
		wp_register_style('codenegar-tooltip-animate', $this->url . 'css/animate.css');
		wp_register_script('codenegar-tooltip-modernizr',  $this->url . 'js/modernizr.js', array('jquery'), false, true);
		wp_register_script('codenegar-tooltip-core',  $this->url . 'js/smallipop.js', array(), false, true);
		wp_register_script('codenegar-tooltip-easing',  $this->url . 'js/easing.js', array(), false, true);
		wp_register_script('codenegar-tooltip-custom',  $this->url . 'js/script.js', array(), false, true);
	}
	
	public function load_frontend_assets(){
		wp_enqueue_style('codenegar-tooltip-style');
		wp_enqueue_style('codenegar-tooltip-animate');
		//wp_print_scripts
		wp_enqueue_script('codenegar-tooltip-modernizr');
		wp_enqueue_script('codenegar-tooltip-core');
		wp_enqueue_script('codenegar-tooltip-easing');
		wp_enqueue_script('codenegar-tooltip-custom');
	}
	
	function shortcode_column_value($name) {
		global $post;
		switch ($name) {
			case 'shortcode':
				$shortcode = '[content_tooltip id="' . $post->ID . '" title="' . esc_attr($post->post_title) . '"]';
				echo $shortcode;
		}
	}
}

// Initalize CodeNegar content tooltip Global Object
$codeNegar_ctt = new CodeNegar_ctt();

// Add an activation hook
register_activation_hook(__FILE__, array(&$codeNegar_ctt, 'activate'));

// Run the plugins initialization method
add_action('init', array(&$codeNegar_ctt, 'initialize'));
add_filter('manage_edit-content_tooltip_columns', array(&$codeNegar_ctt,'shortcode_column'));
add_action('manage_posts_custom_column',  array(&$codeNegar_ctt,'shortcode_column_value'));
add_action('plugins_loaded', array(&$codeNegar_ctt,'plugins_loaded'));

// Register frontend/admin scripts and styles
add_action('wp_enqueue_scripts', array(&$codeNegar_ctt, 'register_frontend_assets'));

// Load frontend scripts and styles
add_action('wp_enqueue_scripts', array(&$codeNegar_ctt, 'load_frontend_assets'));

//  Add filter to ensure the tooltip is displayed when user updates a tooltip
add_filter('post_updated_messages',  array(&$codeNegar_ctt->helper, 'post_update_messages'));

// Remove extra tooltip list links
add_filter('post_row_actions', array(&$codeNegar_ctt->helper, 'remove_row_actions'), 10, 1 );

// Contact Form 7
add_filter('wpcf7_init', array(&$codeNegar_ctt, 'wpcf7_handler'), 10);
?>