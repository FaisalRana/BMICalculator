import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Person from './person.js';

$(document).ready(function() {
  $('#triangle-checker-form').submit(function(event) {
    event.preventDefault();
    const inputName = $('#inputName').val();
    const inputWeight = $('#inputWeight').val();
    const inputHeight = $('#inputHeight').val();
    const person = new Person(inputName, inputWeight, inputHeight);
    const response = person.checkBMI();
    $('#response').append("<p>" + response + "</p>");
  });
});