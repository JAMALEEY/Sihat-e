<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $Patients = Patient::all();

        return $Patients;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view('patient.');  // ajout de la view
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'=>'required',

// oublie pas les autres field

        ]);
        return Patient::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $Patient_show = Patient::find($id);
        return $Patient_show;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $Patient_update=Patient::find($id);
        $Patient_update->update($request->all());
        return $Patient_update;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        return Patient::destroy($id);
    }

      /**
     * Search the specified resource from storage.
     *
     * @param  string  $name
     * @return \Illuminate\Http\Response
     */



    public function search($name)
    {
        //
        return Patient::where('name','like','%'.$name.'%')->get();
    }


    public function getAllPatients() {
        $Patients = Patient::get()->toJson(JSON_PRETTY_PRINT);
        return response($Patients, 200);
      }
}
