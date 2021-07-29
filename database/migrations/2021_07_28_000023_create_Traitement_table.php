<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTraitementTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'Traitement';

    /**
     * Run the migrations.
     * @table Traitement
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id_traitement');
            $table->integer('id_drug')->nullable()->default(null);
            $table->integer('id_patient')->nullable()->default(null);

            $table->index(["id_drug"], 'id_drug');

            $table->index(["id_patient"], 'Traitement_id_patient');


            $table->foreign('id_drug', 'id_drug')
                ->references('id_drug')->on('drugs')
                ->onDelete('restrict')
                ->onUpdate('restrict');

            $table->foreign('id_patient', 'Traitement_id_patient')
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
