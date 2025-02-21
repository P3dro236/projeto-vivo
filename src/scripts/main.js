// main.js
import { planos, devices } from './plans.js';
import { atualizarPlanos,atualizarAparelhos, adicionarListeners } from './listeners.js';

$(document).ready(function () {
    atualizarPlanos($(".group #devices").first(), devices);
    atualizarAparelhos($(".group #planos").first(), planos);
    adicionarListeners();
});