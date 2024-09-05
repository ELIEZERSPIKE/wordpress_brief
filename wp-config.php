<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'jack' );

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
define( 'AUTH_KEY',         'pn2YMHu_pHxp<MrAm ,.3:B</rC}iVB2?L5;w=jD|@hjrR@Xp_<dNU%(k(,+A5?8' );
define( 'SECURE_AUTH_KEY',  'DZc^3@_sRHC;/|f#<njO;Y7M[zr]]?y7?@hoYJaPBCl:P#r06)GYfmS$(8?2-iy(' );
define( 'LOGGED_IN_KEY',    ';s;B.`2,6mWz ][oy&ZZ>p7Yq%&^Ewa CcK5+nGc#Tb36nSCD[P4D<X.xQED_0eE' );
define( 'NONCE_KEY',        'zk=x_>MTRfrb!+DPZ4TdqhoD)Mw+4 511?2Jn`?$7kVo+gcT1&E,PnQx|]Ps/_lm' );
define( 'AUTH_SALT',        ';LqlAxc;5Y$+Vqa_SFGG9#%g,VR01+pZu?@<3^/i9L[ys[G;p%+l9Y,7?#(~EJPw' );
define( 'SECURE_AUTH_SALT', 'IBVmQmMwE|Ku75fnch^;Qn2lupc$^tD/u{Kd UsHg3*EsF(U$|3kRc,bZ=HL2L|c' );
define( 'LOGGED_IN_SALT',   'Q~Gn)ZpW5UVGy_0;_HOkEor__PG~B8d!LizRm)ZweqPq6BYaCs$89)t4C % /cXS' );
define( 'NONCE_SALT',       ' 8.+5&@dh~Sx*0`xR(GX&28ui|S}h+E.=H!feB4.|OLCB0#AR4c5+ejXSD/=oduK' );

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
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
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
