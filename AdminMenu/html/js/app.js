// APRI E CHIUDI MENU 

$(function() {
    window.addEventListener('message', function(event) {
        switch (event.data.action) {
            case 'enable':
                $('.fatture').hide();
                $('.auto').hide();
                $('#tastovaiindietro').hide();
                $('#container').show();
                $('.playerlist').show();
                break;
            case 'enableCar':
                $('.fatture').hide();
                $('.playerlist').hide();
                $('#container').show();
                $('.auto').show();
                $('#tastovaiindietro').show();
                break;
            case 'enableFatture':
                $('.auto').hide();
                $('.playerlist').hide();
                $('#container').show();
                $('.fatture').show();
                $('#tastovaiindietro').show();
                break;
            case 'enableBan':
                $('.auto').hide();
                $('.playerlist').hide();
                $('#container').show();
                $('.fatture').show();
                $('#tastovaiindietro').show();
                break;
            case 'updatePlayerList':
                $('.playerlist tr:gt(0)').remove();
                $('.playerlist').append(event.data.players);
                SistemaLista();
                break;
            case 'updateFattureList':
                $('.fatture tr:gt(0)').remove();
                $('.fatture').append(event.data.fatture);
                SistemaLista2();
            case 'updateAutoList':
                $('.auto tr:gt(0)').remove();
                $('.auto').append(event.data.auto);
                SistemaLista3();
                break;
            case 'chiudi':
                $('.fatture').hide();
                $('.auto').hide();
                $('#container').hide();
                $('.playerlist').hide();
                $('#tastovaiindietro').hide();
                break;
            default:
                break;
        }
    });
    document.onkeyup = function(data) {
        if (data.which == 27) {
            $('.fatture').hide();
            $('#container').hide();
            $('.playerlist').hide();
            $('.auto').hide();
            $('#tastovaiindietro').hide();
            $.post('http://AdminMenu/chiudimenu');
        }
    }

});

// SORT DEI NOMI 

function SistemaLista() {
    var table = $('.playerlist'),
        rows = $('tr:not(:first-child)', table);

    rows.sort(function(a, b) {
        var keyA = $('td', a).eq(1).html();
        var keyB = $('td', b).eq(1).html();

        return (keyA - keyB);
    });

    rows.each(function(index, row) {
        table.append(row);
    });
}

function SistemaLista2() {
    var table = $('.fatture'),
        rows = $('tr:not(:first-child)', table);

    rows.sort(function(a, b) {
        var keyA = $('td', a).eq(1).html();
        var keyB = $('td', b).eq(1).html();

        return (keyA - keyB);
    });

    rows.each(function(index, row) {
        table.append(row);
    });
}

function SistemaLista3() {
    var table = $('.auto'),
        rows = $('tr:not(:first-child)', table);

    rows.sort(function(a, b) {
        var keyA = $('td', a).eq(1).html();
        var keyB = $('td', b).eq(1).html();

        return (keyA - keyB);
    });

    rows.each(function(index, row) {
        table.append(row);
    });
}

// FUNZIONI VARIE 

function goto(id) {
    $('#container').hide();
    $.post('http://AdminMenu/chiudimenu');
    $.post('http://AdminMenu/goto', JSON.stringify(id));

}

function bring(id) {
    $('#container').hide();
    $.post('http://AdminMenu/chiudimenu');
    $.post('http://AdminMenu/bring', JSON.stringify(id));
}

function screenshot(id) {
    $('#container').hide();
    $.post('http://AdminMenu/chiudimenu');
    $.post('http://AdminMenu/screenshot', JSON.stringify(id));
}

function freeze(id) {
    $('#container').hide();
    $.post('http://AdminMenu/chiudimenu');
    $.post('http://AdminMenu/freeze', JSON.stringify(id));
}

function unfreeze(id) {
    $('#container').hide();
    $.post('http://AdminMenu/chiudimenu');
    $.post('http://AdminMenu/unfreeze', JSON.stringify(id));
}

function kick(id) {
    $('#container').hide();
    $.post('http://AdminMenu/chiudimenu');
    $.post('http://AdminMenu/kick', JSON.stringify(id));
}

function fatture(id) {
    $('.playerlist').hide();
    $('.fatture').show();
    $('#tastovaiindietro').show();
    $.post('http://AdminMenu/fatture', JSON.stringify(id));
}

function VaiIndietro() {
    $.post('http://AdminMenu/vaiindietro');
}