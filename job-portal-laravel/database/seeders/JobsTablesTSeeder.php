<?php
namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class JobsTablesTSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('jobs')->insert([
            'id' => 1,
            'name' => 'Aiub',
            'title' => 'Clerk',
            'location' => 'Dhaka',
            'salary' => '50000',
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
