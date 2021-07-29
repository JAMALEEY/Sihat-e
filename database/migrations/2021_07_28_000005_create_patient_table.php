<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePatientTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'patient';

    /**
     * Run the migrations.
     * @table patient
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id_patient');
            $table->string('name', 45)->nullable()->default(null);
            $table->string('age', 45)->nullable()->default(null);
            $table->string('height', 45)->nullable()->default(null);
            $table->string('weight', 45)->nullable()->default(null);
            $table->string('patientcol', 45)->nullable()->default(null);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists($this->tableName);
    }
}
