<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSexualDeseasePatientTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'sexual_desease_patient';

    /**
     * Run the migrations.
     * @table sexual_desease_patient
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->integer('id_patient')->nullable()->default(null);
            $table->integer('id_sexual_deseas')->nullable()->default(null);

            $table->index(["id_patient"], 'sexual_desease_patient_id_patient');

            $table->index(["id_sexual_deseas"], 'id_sexual_desease');


            $table->foreign('id_sexual_deseas', 'id_sexual_desease')
                ->references('id_sexual_deseas')->on('sexual_deseases')
                ->onDelete('restrict')
                ->onUpdate('restrict');

            $table->foreign('id_patient', 'sexual_desease_patient_id_patient')
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
