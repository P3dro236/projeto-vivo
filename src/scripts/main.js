$(document).ready(function () {
    const group = `<div class='mb-3 d-flex justify-content-center align-items-center group'>
            <select role='button' id='planos' class='form-select me-2'>
                <option value=' selected disabled>Selecione o plano</option>
                <option value='Basico'>Básico - R$50</option>
                <option value='Intermediario'>Intermediário - R$80</option>
                <option value='Avancado'>Avançado - R$120</option>
            </select>
            <button id='addPlan' class='btn btn-success p-0'>+</button>
            <button id='removePlan' class='btn btn-danger p-0'>-</button>
        </div>`;
        $(".container").on("click", ".addPlan", function() {
            let newGroup = $(group);
            $(".container").append(newGroup);
        });
});