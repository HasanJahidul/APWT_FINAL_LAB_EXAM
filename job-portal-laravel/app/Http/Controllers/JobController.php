<?php

namespace App\Http\Controllers;
use App\Models\Job;
use Illuminate\Http\Request;

class JobController extends Controller
{
    public function index()
    {
        /**
         * Display a listing of the resource.
         *
         * @return \Illuminate\Http\Response
         */
        $job = Job::all();
        return response()->json($job);
    }
     /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $job = Job::create($request->all());
        return response()->json(['job' => $job]);
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function show(Job $job)
    {
        return $job;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Job $job)
    {
        $job->name = $request->input('name');
        $job->title = $request->input('title');
        $job->location = $request->input('location');
        $job->salary = $request->input('salary');
        $job->save();

        return response()->json([
            'message' => 'Job updated!',
            'job' => $job
        ]);


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function destroy(Job $job)
    {
        $result = $job->delete();
       if($result){
        return response()->json([
            'message' => 'job deleted'
        ]);
       }
       else{
        return response()->json([
            'message' => 'delete operation not working'
        ]);
       }
    }
}



   