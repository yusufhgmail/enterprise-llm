CREATE TABLE `leads` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`company` text NOT NULL,
	`stack` text,
	`problem` text NOT NULL,
	`language` text DEFAULT 'en' NOT NULL,
	`created_at` text NOT NULL
);
