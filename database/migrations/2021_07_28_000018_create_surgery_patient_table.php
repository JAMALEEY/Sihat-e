<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSurgeryPatientTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'surgery_patient';

    /**
     * Run the migrations.
     * @table surgery_patient
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id_surgery_patient');
            $table->integer('id_patient')->nullable()->default(null);
            $table->string('Description', 45)->nullable()->default(null);

            $table->index(["id_patient"], 'surgery_patient_id_patient');


            $table->foreign('id_patient', 'surgery_patient_id_patient')
                ->references('id_patient')->on('patient')
                ->onDelete('restrict')
                ->onUpdate('restrict');
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
