<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/jobs', 'JobController@index')->name('jobs.all');
Route::post('/jobs', 'JobController@create')->name('jobs.create');

Route::get('/jobs/{job}', 'JobController@show')->name('jobs.show');

Route::put('/jobs/{job}', 'JobController@update')->name('jobs.update');
Route::delete('/jobs/{job}', 'JobController@destroy')->name('jobs.destroy');


Route::get('/employer', 'EmployerController@index')->name('employer.all');
Route::post('/employer', 'EmployerController@create')->name('employer.create');

Route::get('/employer/{job}', 'EmployerController@show')->name('employer.show');

Route::put('/employer/{job}', 'EmployerController@update')->name('employer.update');
Route::delete('/employer/{job}', 'EmployerController@destroy')->name('employer.destroy');