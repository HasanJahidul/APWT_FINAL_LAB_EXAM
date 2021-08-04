<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class EmployersTablesTSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('employers')->insert([
            'id' => 1,
            'name' => 'Joy',
            'cname' => 'JoyDev',
            'number' => '01654456789',
            'username' => 'abc',
            'password' => '123456',
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
