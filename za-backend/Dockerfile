# Use the official PHP 8 image
FROM php:8.3-apache

RUN apt-get -y update --fix-missing

# Set the working directory in the container
WORKDIR /var/www/html

# Copy the composer files
COPY composer.json composer.lock ./

# Install PHP extensions and dependencies
RUN apt-get -y install libsqlite3-dev libsqlite3-0 libonig-dev
RUN docker-php-ext-install pdo_mysql 

RUN docker-php-ext-install pdo_mysql \
    && a2enmod rewrite
RUN docker-php-ext-install mysqli

RUN apt-get -y install zlib1g-dev libzip-dev
RUN docker-php-ext-install zip

RUN apt-get -y install libicu-dev
RUN docker-php-ext-install -j$(nproc) intl

RUN docker-php-ext-install mbstring

RUN apt-get install -y libfreetype6-dev libjpeg62-turbo-dev libpng-dev
RUN docker-php-ext-configure gd 
RUN docker-php-ext-install -j$(nproc) gd

RUN docker-php-ext-install bcmath
RUN docker-php-ext-install calendar
RUN docker-php-ext-install pcntl

RUN apt-get -y install libxml2-dev
RUN docker-php-ext-install soap

RUN docker-php-ext-install sockets
RUN docker-php-ext-install sysvmsg
RUN docker-php-ext-install sysvsem
RUN docker-php-ext-install sysvshm

RUN docker-php-ext-install gettext

RUN apt-get -y install libxslt1-dev python-dev-is-python3
RUN docker-php-ext-install xsl

RUN docker-php-ext-install exif

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install dependencies
RUN composer install --no-scripts --no-autoloader

# Copy the rest of the application
COPY . .

# Set permissions
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache
RUN chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# Generate the autoloader and clear the cache
RUN composer dump-autoload
RUN php artisan cache:clear

# Start the application
CMD ["apache2-foreground"]