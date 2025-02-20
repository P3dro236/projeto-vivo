document.addEventListener('DOMContentLoaded', () => {
    const selectedPlans = JSON.parse(localStorage.getItem('selectedPlans'));
    const plansContainer = document.getElementById('plans');

    do{
        const temp = {
            nome: "",
            valor: "",
            caracteristicas: ""
        }
        selectedPlans.push(temp)
    } while (selectedPlans.length <= 7 )

    if (selectedPlans && plansContainer) {
        selectedPlans.forEach(plan => {
            const planElement = document.createElement('div');
            planElement.classList.add('col-3');
            planElement.innerHTML = `
                <div class="card m-3">
                    <div class="card-header">
                        <h3 class="text-center">${plan.nome}</h3>
                    </div>
                    <div class="card-body text-center">
                        ${plan.caracteristicas}
                    </div>
                    <div class="card-footer text-center">
                        <span>Valor: ${plan.valor}</span>
                    </div>
                </div>
            `;
            plansContainer.appendChild(planElement);
        });
    }
});