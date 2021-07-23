<h1>Add Document Patient</h1>


<form action="{{Route('/add_document')}}" method="post">
@csrf

<label for="">Nom</label>
<input type="text" name="" id="">


<input type="hidden" name="patient_id" value="{{Session('user_id')}}">



{{-- Ajout du multi file ici --}}

<label for="">Documents</label>
<input type="file" name="" id="">


<label for="">Description</label>
<input type="text" name="" id="">







</form>
