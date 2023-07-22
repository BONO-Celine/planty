<?php
/**
 * Planty Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Planty
 * @since 1.0.0
 */

/**
 * Define Constants
 */
define( 'CHILD_THEME_PLANTY_VERSION', '1.0.0' );

/**
 * Enqueue styles
 */
function child_enqueue_styles() {

	wp_enqueue_style( 'planty-theme-css', get_stylesheet_directory_uri() . '/style.css', array('astra-theme-css'), CHILD_THEME_PLANTY_VERSION, 'all' );
	wp_enqueue_style('theme-style', get_stylesheet_directory_uri() . '/css/theme.css', array(), filemtime(get_stylesheet_directory() . '/css/theme.css'));

}

add_action( 'wp_enqueue_scripts', 'child_enqueue_styles', 15 );



/*    hook       */

add_filter( 'wp_nav_menu_items', 'add_admin_item_to_nav_menu', 10, 2 );
function add_admin_item_to_nav_menu( $items, $args ) {
    if (is_user_logged_in() && $args->menu == 1) {
        $items .= '<li class="menu-item"><a href="'. esc_url( home_url( '/' ) ). 'wp-admin/'.'">Admin</a></li>';
    }
    return $items;
}