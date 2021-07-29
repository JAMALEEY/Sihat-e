<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDoctorRequestsStatusTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'doctor_requests_status';

    /**
     * Run the migrations.
     * @table doctor_requests_status
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id_doctor_request');
            $table->integer('id_doctor');
            $table->integer('id_patient');
            $table->string('status', 45)->nullable()->default(null);

            $table->index(["id_doctor"], 'doctor_requests_status_id_doctor');

            $table->index(["id_patient"], 'doctor_requests_status_id_patient');


            $table->foreign('id_doctor', 'doctor_requests_status_id_doctor')
                ->references('id_doctor')->on('doctors')
                ->onDelete('restrict')
                ->onUpdate('restrict');

            $table->foreign('id_patient', 'doctor_requests_status_id_patient')
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
