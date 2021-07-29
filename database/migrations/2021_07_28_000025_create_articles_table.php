<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArticlesTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'articles';

    /**
     * Run the migrations.
     * @table articles
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id_article');
            $table->integer('id_doctor')->nullable()->default(null);
            $table->string('title', 45)->nullable()->default(null);
            $table->string('content', 45)->nullable()->default(null);

            $table->index(["id_doctor"], 'articles_id_doctor');


            $table->foreign('id_doctor', 'articles_id_doctor')
                ->references('id_doctor')->on('doctors')
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
