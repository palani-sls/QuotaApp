CREATE TABLE IF NOT EXISTS `client` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `client_name` varchar(255) NOT NULL,
  `client_role` varchar(100) DEFAULT NULL,  
  `company_name` varchar(255) DEFAULT NULL,  
  `email` varchar(255) NOT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `address_line1` varchar(255) DEFAULT NULL,
  `address_line2` varchar(255) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `pincode` int DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  `active_status` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `quotation` (
  `id` varchar(255) NOT NULL,
  `client_id` bigint NOT NULL,  
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  `expiry` timestamp DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (client_id)
        REFERENCES client(id)
        ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `quotation_details` (
`id` bigint NOT NULL AUTO_INCREMENT,
  `quotation_id` varchar(255) NOT NULL,
  `site` varchar(100) NOT NULL,
  `site_id` bigint DEFAULT NULL,
  `environment` varchar(100) NOT NULL,
  `quantity` int NOT NULL,
  `name` varchar(250) DEFAULT NULL,
  `cost` decimal(16,12) NOT NULL,
  `resource_type` varchar(45) NOT NULL, 
  PRIMARY KEY (`id`),
  UNIQUE KEY (quotation_id, resource_type),
 FOREIGN KEY (quotation_id)
        REFERENCES quotation(id)
        ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;