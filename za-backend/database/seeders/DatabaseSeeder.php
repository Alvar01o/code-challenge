<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Products;
use App\Models\Categories;
use App\Models\CategoryProducts;
use Illuminate\Support\Str;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        Products::create(
            [
                'brand' => 'labba',
                'slug' => Str::slug('labba', "-"),
                'name' => 'Television 8K',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                'price' => 270000,
                'image' => 'http://localhost/images/tv1.webp'
            ]
        );
        Products::create(
            [
                'brand' => 'SuperMarca',
                'slug' => Str::slug('SuperMarca', "-"),
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                'name' => 'Tabbavision',
                'price' => 250000,
                'image' => 'http://localhost/images/tv2.webp'
            ]
        );
        Products::create(
            [
                'brand' => 'SuperMarca2',
                'slug' => Str::slug('SuperMarca2', "-"),
                'name' => 'labbadora',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                'price' => 345000,
                'image' => 'http://localhost/images/tv1.webp'
            ]
        );
        
        Products::factory(10)->create();
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
