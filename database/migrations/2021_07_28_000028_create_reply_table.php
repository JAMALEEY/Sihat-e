<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReplyTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'reply';

    /**
     * Run the migrations.
     * @table reply
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id_reply');
            $table->integer('id_comment')->nullable()->default(null);
            $table->integer('id_doctor')->nullable()->default(null);
            $table->string('content', 45)->nullable()->default(null);

            $table->index(["id_doctor"], 'reply_id_doctor');
            $table->nullableTimestamps();


            $table->foreign('id_doctor', 'reply_id_doctor')
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
