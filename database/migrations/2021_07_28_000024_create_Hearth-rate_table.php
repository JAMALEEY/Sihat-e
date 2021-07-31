<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHearthRateTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'Hearth-rate';

    /**
     * Run the migrations.
     * @table Hearth-rate
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id_hearth_rate');
            $table->integer('id_patient')->nullable()->default(null);
            $table->string('hearth_rate', 45)->nullable()->default(null);
            $table->timestamp('timestamp')->nullable()->default(null);

            $table->index(["id_patient"], 'Hearth-rate_id_patient');


            $table->foreign('id_patient', 'Hearth-rate_id_patient')
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
