<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBloodDonationTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'blood_donation';

    /**
     * Run the migrations.
     * @table blood_donation
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id_donnation');
            $table->timestamp('timestamp')->nullable()->default(null);
            $table->integer('id_patient')->nullable()->default(null);

            $table->index(["id_patient"], 'blood_donation_id_patient');


            $table->foreign('id_patient', 'blood_donation_id_patient')
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
