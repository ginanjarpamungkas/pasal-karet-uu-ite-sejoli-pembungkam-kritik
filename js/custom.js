//slider mobile
var $status = $('.pagingInfo');
    var $slickElement = $('.mobile-slider');
    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + '/' + slick.slideCount);
    });

    $slickElement.slick({
		arrows:true,
		dots:false,
		variableWidth:false,
		centerMode: false,
		slidesToShow:1,
		slidesToScroll:1,
		centerPadding: '0',
		speed:500,
		infinite: true,
    });

//slider desktop
$(document).ready(function() {
	$(".main-slider").slick({
		arrows:true,
		dots:false,
		variableWidth:false,
		centerMode: true,
		slidesToShow:1,
		slidesToScroll:1,
		centerPadding: '0',
		speed: 1000,
		infinite: true,
		});
    });

//open curtain
$(document).ready(function() {
    $(".openwin").click(function() {
        $('.bigtop').addClass('topanim');
        $('.bigbot').addClass('botanim');
        $('.main-slider').addClass('show');
    });
    $(".closewin").click(function() {
        $('.bigtop').removeClass('topanim');
        $('.bigbot').removeClass('botanim');
        $('.main-slider').removeClass('show');
    });
});

//show popup
$(document).ready(function() {
	let counts = $('.the-popup').length;

	for (let username = 1; username < counts+1; username++) {
		$('#btn-username0'+username+'').click(function() {
			$('.the-popup').css('background','url(foto/0'+username+'.jpg) center center no-repeat');
			$('.the-popup').css('background-size','cover');
			$('#main-artikel').hide();
			$('#artikel-username0'+username+'').show();
			$('#username0'+username+'').slideDown();
			$('#username0'+username+'').css('display','flex');
		})
		$('#close-username0'+username+'').click(function() {
			$('#username0'+username+'').slideUp();
			$('#main-artikel').show();
			$('#artikel-username0'+username+'').hide();
		})
	}

	for (let username = 1; username < counts+1; username++) {
		$('#btn-mobile-username0'+username+'').click(function() {
			$('.the-popup').css('background','url(foto/0'+username+'.jpg) center center no-repeat');
			$('.the-popup').css('background-size','cover');
			$('#main-artikel').hide();
			$('#artikel-username0'+username+'').show();
			$('#username0'+username+'').slideDown();
			$('#username0'+username+'').css('display','flex');
		})
		$('#close-username0'+username+'').click(function() {
			$('#username0'+username+'').slideUp();
			$('#main-artikel').show();
			$('#artikel-username0'+username+'').hide();
		})
	}
});
// akademika data json
var dataKorban = [];
var dataKorbanFiltered;
var countPopup;

function getData(e){
    var dataJson = '';
    var profesi = $(e).data('profesi');

    switch (profesi) {
        case 'akademika':
        var dataJson = 'data/akademika.json';
        break;
        case 'aktivis':
        var dataJson = 'data/aktivis.json';
        break;
        case 'asn':
        var dataJson = 'data/asn.json';
        break;
        case 'buruh':
        var dataJson = 'data/buruh.json';
        break;
        case 'pelajar':
        var dataJson = 'data/pelajar.json';
        break;
        case 'penulis':
        var dataJson = 'data/penulis.json';
        break;
        case 'pesohor':
        var dataJson = 'data/pesohor.json';
        break;
        case 'swasta':
        var dataJson = 'data/swasta.json';
        break;
        default:
        var dataJson = 'data/warga.json';
        break;
    }
    $.getJSON(dataJson,function(data){
        dataKorban = data;
        countPopup = dataKorban.length;
        dataKorbanFiltered =  dataKorban.filter(function(data) {
            return data.id == 1;
          });

          $('#'+profesi+'_nama').html(dataKorbanFiltered[0].nama);
          $('#'+profesi+'_tanggal').html(dataKorbanFiltered[0].tanggal);
          $('#'+profesi+'_domisili').html(dataKorbanFiltered[0].domisili);
          $('#'+profesi+'_pekerjaan').html(dataKorbanFiltered[0].pekerjaan);
          $('#'+profesi+'_pasal').html(dataKorbanFiltered[0].pasal);
          $('#'+profesi+'_narasi').html(''+dataKorbanFiltered[0].narasi);
          $('#'+profesi+'_countPopup').html(''+countPopup);
          $('#'+profesi+'_idPopup').html(''+dataKorbanFiltered[0].id);
          $('#'+profesi+'_prev').attr('data-id',countPopup);
          $('#'+profesi+'_next').attr('data-id',2);
    });
}

function arrowButton(e) {
    let id = $(e).data('id');
    var profesi = $(e).data('profesi');

    dataKorbanFiltered =  dataKorban.filter(function(data) {
        return data.id == id;
    });

      $('#'+profesi+'_nama').html(dataKorbanFiltered[0].nama);
      $('#'+profesi+'_tanggal').html(dataKorbanFiltered[0].tanggal);
      $('#'+profesi+'_domisili').html(dataKorbanFiltered[0].domisili);
      $('#'+profesi+'_pekerjaan').html(dataKorbanFiltered[0].pekerjaan);
      $('#'+profesi+'_pasal').html(dataKorbanFiltered[0].pasal);
      $('#'+profesi+'_narasi').html(''+dataKorbanFiltered[0].narasi);
      $('#'+profesi+'_idPopup').html(''+dataKorbanFiltered[0].id);
      if (id == 1) {
        $('#'+profesi+'_prev').data('id',countPopup);
        $('#'+profesi+'_next').data('id',2);
      } else if(id == countPopup){
        $('#'+profesi+'_prev').data('id',(countPopup-1));
        $('#'+profesi+'_next').data('id',1);
      } else {
        $('#'+profesi+'_prev').data('id',(id-1));
        $('#'+profesi+'_next').data('id',(id+1));
      }
}
