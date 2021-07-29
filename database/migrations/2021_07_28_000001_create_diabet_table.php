<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDiabetTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'diabet';

    /**
     * Run the migrations.
     * @table diabet
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id_diabet');
            $table->string('type', 45)->nullable()->default(null);
            $table->string('Description', 45)->nullable()->default(null);
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
