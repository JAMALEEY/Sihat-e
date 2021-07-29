<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDoctorsTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'doctors';

    /**
     * Run the migrations.
     * @table doctors
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id_doctor');
            $table->string('name', 45);
            $table->integer('id_speciality')->nullable()->default(null);

            $table->index(["id_speciality"], 'id_speciality');


            $table->foreign('id_speciality', 'id_speciality')
                ->references('id_speciality')->on('speciality')
                ->onDelete('set null')
                ->onUpdate('cascade');
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
