<?php
if (!defined('ABSPATH')) exit('No direct script access allowed');

 /**
 * CodeNegar Content Tooltip functions
 *
 * Non object oriented functions
 *
 * @package    	WordPress Content Tooltip
 * @author      Farhad Ahmadi <ahm.farhad@gmail.com>
 * @license     http://codecanyon.net/licenses
 * @link		http://codenegar.com/go/ctt
 * @version    	2.5.1
 */


if(!function_exists('codenegar_parse_args')){

	function codenegar_parse_args($args, $defaults = ''){
		if ( is_object( $args ) )
			$r = get_object_vars( $args );
		elseif ( is_array( $args ) )
			$r =& $args;
		else{
            $r = array();
			wp_parse_str( $args, $r ); // second parameter is output
        }
		if ( is_array( $defaults ) )
			return codenegar_array_merge( $defaults, $r );
		return $r;
	}
}

if(!function_exists('codenegar_array_merge')){

	function codenegar_array_merge(){
		$params = func_get_args();
		$merged = array_shift($params); // using first array as base
	 
		foreach ($params as $array){
			foreach ($array as $key => $value){
				if (isset($merged[$key]) && is_array($value) && is_array($merged[$key])){
					$merged[$key] = codenegar_array_merge($merged[$key], $value);
				}
				else{
					$merged[$key] = $value;
				}
			}
		}
		return $merged;
	}
}

?>