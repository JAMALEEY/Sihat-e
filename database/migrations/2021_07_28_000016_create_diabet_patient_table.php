<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDiabetPatientTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'diabet_patient';

    /**
     * Run the migrations.
     * @table diabet_patient
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id_diabet_patient');
            $table->integer('id_diabet')->nullable()->default(null);
            $table->integer('id_patient')->nullable()->default(null);

            $table->index(["id_diabet"], 'id_diabet');

            $table->index(["id_patient"], 'diabet_patient_id_patient');


            $table->foreign('id_patient', 'diabet_patient_id_patient')
                ->references('id_patient')->on('patient')
                ->onDelete('restrict')
                ->onUpdate('restrict');

            $table->foreign('id_diabet', 'id_diabet')
                ->references('id_diabet')->on('diabet')
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
