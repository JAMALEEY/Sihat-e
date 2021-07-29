<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAllergyPatientTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'allergy_patient';

    /**
     * Run the migrations.
     * @table allergy_patient
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id_patient_allergy');
            $table->integer('id_patient')->nullable()->default(null);
            $table->integer('id_allergy')->nullable()->default(null);
            $table->string('allergy_patientcol', 45)->nullable()->default(null);

            $table->index(["id_patient"], 'allergy_patient_id_patient');

            $table->index(["id_allergy"], 'id_allergy');


            $table->foreign('id_patient', 'allergy_patient_id_patient')
                ->references('id_patient')->on('patient')
                ->onDelete('restrict')
                ->onUpdate('restrict');

            $table->foreign('id_allergy', 'id_allergy')
                ->references('id_allergy')->on('allergy')
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
