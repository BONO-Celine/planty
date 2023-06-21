<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'planty' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'uJoxmz2qn-2l@le21J5gS1J@|BANFeUe`le-KzDq;4I$f {Uo]/mUbYni0wROWhx' );
define( 'SECURE_AUTH_KEY',  'P/W7z[/v9L4NHjx^8gYunRRR+[I:+,4+evlf5A![f35:suFt-eYt}2O5b4o& Pn!' );
define( 'LOGGED_IN_KEY',    '61Zb,d?e!ye9F]S<:@F9VTk2UWxW sLqu(C^OLJlD!WOHq9]!4]E{@GWxmSHj9NC' );
define( 'NONCE_KEY',        'b#@?G-$L-D^EvtKQW]x}9m1mB<wbt} c..jj:5Q{<5d<G1eb>`E@xR_EZKn*FX-w' );
define( 'AUTH_SALT',        '2uR+50C~Z1)-$&xFcA!u3GP<2n3+^qL+4lt$(x#=K$%1d0c[x_mk8q,/0y$M?vpW' );
define( 'SECURE_AUTH_SALT', '~o_`tb.vcq>e@#;)4E3tz]6Ijt;atpLNPNz#9Fz(0^N=B;7|g|:Evqgq$HdWGmNY' );
define( 'LOGGED_IN_SALT',   'P3G-`/+:t?xQd^#wqJNz2w]?z~$:fJP%Z@O|?6OS7IeD-.#Dk!RK@2ED9n7dTF1p' );
define( 'NONCE_SALT',       '5jpvkyF)SEVD~+31@6Ce$a0$38q44))g*5Gky)H;-~XA<.B(vY`(.D%GWIk-8Gqz' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
