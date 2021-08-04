<?php


namespace App\Http\Controllers;
use App\Models\Employer;
use Illuminate\Http\Request;


class EmployerController extends Controller
{
    public function index()
    {
        /**
         * Display a listing of the resource.
         *
         * @return \Illuminate\Http\Response
         */
        $employer = Employer::all();
        return response()->json($employer);
    }
     /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $employer = Employer::create($request->all());
        return response()->json(['employer' => $employer]);
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Employer  $employer
     * @return \Illuminate\Http\Response
     */
    public function show(Employer $employer)
    {
        return $employer;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Employer  $employer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Employer $employer)
    {
        $employer->name = $request->input('name');
        $employer->cname = $request->input('cname');
        $employer->title = $request->input('title');
        $employer->location = $request->input('location');
        $employer->salary = $request->input('salary');
        $employer->save();

        return response()->json([
            'message' => 'employer updated!',
            'employer' => $employer
        ]);


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Employer  $employer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Employer $employer)
    {
        $result = $employer->delete();
       if($result){
        return response()->json([
            'message' => 'employer deleted'
        ]);
       }
       else{
        return response()->json([
            'message' => 'delete operation not working'
        ]);
       }
    }
}
