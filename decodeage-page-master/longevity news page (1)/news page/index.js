function openSidebar(id, cover) {
    if (id === 'sidebar-1') {
      document.getElementById(id).style.width = 'fit-content';
    }
    document.getElementById(id).classList.toggle('active');
    document.getElementById(cover).classList.toggle('active');
  
    document.getElementById(cover).addEventListener('click', () => {
  
      if (document.getElementById(id).classList.contains('active')) {
        if (id === 'sidebar-1') {
          document.getElementById(id).style.width = '0px';
        }
        else if (id.includes('small-sidebar')) {
          const new_id = id.split(id)[1] || '';
          document.getElementById('sidebar').classList.remove('active');
          document.getElementById('cover').classList.remove('active');
          document.getElementById(id).classList.remove('active');
          document.getElementById('small-cover').classList.remove('active');
        }
        else if (id.includes('mini-sidebar')) {
          document.getElementById('sidebar').classList.remove('active');
          document.getElementById('cover').classList.remove('active');
          document.getElementById('small-sidebar0').classList.remove('active');
          document.getElementById('small-cover').classList.remove('active');
          document.getElementById(id).classList.remove('active');
          document.getElementById('mini-cover').classList.remove('active');
        }
        document.getElementById(id).classList.remove('active');
        document.getElementById(cover).classList.remove('active');
  
      }
    });
  }
  
  
  function closeSidebar(id, cover) {
    if (id === 'sidebar-1') {
      document.getElementById(id).style.width = '0px';
    }
    document.getElementById(id).classList.remove('active');
    document.getElementById(cover).classList.remove('active');
  
  }
  
  function openSecondBar(id_1, id_2, id_3, id_4) {
    document.getElementById(id_1).style.display = 'block';
    document.getElementById(id_2).style.display = 'none';
    document.getElementById(id_3).style.display = 'none';
    document.getElementById(id_4).style.display = 'none';
  }
  
  function bothOpenClose() {
    openSidebar('sidebar-1', 'content-cover');
    closeSecondbar();
  }
  function closeSecondbar() {
    document.getElementById('mini-sidebar-1').style.display = 'none';
    document.getElementById('mini-sidebar-2').style.display = 'none';
    document.getElementById('mini-sidebar-3').style.display = 'none';
    document.getElementById('mini-sidebar-4').style.display = 'none';
  }
  
  function closeBothSidebar(sidebar, small_sidebar) {
    document.getElementById(sidebar).classList.remove('active');
    document.getElementById('cover').classList.remove('active');
    document.getElementById(small_sidebar).classList.remove('active');
    document.getElementById('small-cover').classList.remove('active');
  
  }
  function closeThreeSidebar(sidebar, small_sidebar, mini_sidebar) {
    document.getElementById(sidebar).classList.remove('active');
    document.getElementById('cover').classList.remove('active');
    document.getElementById(small_sidebar).classList.remove('active');
    document.getElementById('small-cover').classList.remove('active');
    document.getElementById(mini_sidebar).classList.remove('active');
    document.getElementById('mini-cover').classList.remove('active');
  
  }
  
  function moveCursor(cursorId, event) {
    const cursor = document.getElementById(cursorId);
    cursor.style.left = event.clientX + 'px';
    cursor.style.top = event.clientY + 'px';
  }
  
  document.addEventListener('mousemove', function (e) {
    moveCursor('custom-cursor-1', e);
    moveCursor('custom-cursor-2', e);
    moveCursor('custom-cursor-3', e);
    moveCursor('custom-cursor-4', e);
  });
  
  
  
  
  // Footer code
  
  // Dropdown Countries List
  const countries = [
    { img: 'https://cdn-icons-png.flaticon.com/512/206/206626.png', name: '&nbsp;United&nbsp;State(INR&nbsp;₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/206/206606.png', name: '&nbsp;India&nbsp;(INR&nbsp;₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/555/555473.png', name: '&nbsp;Canada&nbsp;(INR&nbsp;₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/555/555604.png', name: '&nbsp;Afghanistan&nbsp;(INR&nbsp;₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197604.png', name: '&nbsp;Åland&nbsp;Islands&nbsp;(INR&nbsp;₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197633.png', name: '&nbsp;Albania&nbsp;(INR&nbsp;₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197646.png', name: '&nbsp;Algeria&nbsp;(INR&nbsp;₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197599.png', name: '&nbsp;Angola&nbsp;(INR&nbsp;₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197573.png', name: '&nbsp;Argentina&nbsp;(INR&nbsp;₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197561.png', name: '&nbsp;Aruba&nbsp;(INR&nbsp;₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197507.png', name: '&nbsp;Australia&nbsp;(INR&nbsp;₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197598.png', name: '&nbsp;Austria&nbsp;(INR&nbsp;₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197621.png', name: '&nbsp;Bangladesh&nbsp;(INR&nbsp;₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197593.png', name: '&nbsp;Belgium&nbsp;(INR&nbsp;₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197563.png', name: '&nbsp;Belize&nbsp;(INR&nbsp;₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197613.png', name: '&nbsp;Benin&nbsp;(INR&nbsp;₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197627.png', name: '&nbsp;Bhutan&nbsp;(INR&nbsp;₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197606.png', name: '&nbsp;Brazil&nbsp;(INR&nbsp;₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197601.png', name: '&nbsp;China&nbsp;(INR&nbsp;₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197605.png', name: '&nbsp;Chile&nbsp;(INR&nbsp;₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197580.png', name: '&nbsp;Denmark&nbsp;(INR&nbsp;₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197603.png', name: '&nbsp;Ecuador&nbsp;(INR&nbsp;₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197598.png', name: '&nbsp;Egypt&nbsp;(INR&nbsp;₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197619.png', name: '&nbsp;Estonia&nbsp;(INR&nbsp;₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197578.png', name: '&nbsp;Iceland&nbsp;(INR&nbsp;₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197587.png', name: '&nbsp;Indonesia&nbsp;(INR&nbsp;₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197618.png', name: '&nbsp;Iraq&nbsp;(INR&nbsp;₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197590.png', name: '&nbsp;Italy&nbsp;(INR&nbsp;₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197586.png', name: '&nbsp;Jordan&nbsp;(INR&nbsp;₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197601.png', name: '&nbsp;Kuwait&nbsp;(INR&nbsp;₹)' }
  ];
  
  // email authentication
  var emailInput = document.getElementById('email-field');
  var emailLabel = document.getElementById('Email-label');
  var emailError = document.getElementById('email-error');
  
  function validateEmail() {
    emailLabel.style.bottom = '45px';
    emailLabel.style.fontSize = '12px';
  
    if (
      !emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
    ) {
      emailError.innerHTML = 'Please enter a valid email';
      return false;
    }
    emailError.innerHTML = '';
    return true;
  }
  
  // Padmini Code Dropdown
  
  document.getElementById('select-list-data').addEventListener('click', function(event) {
    event.preventDefault(); 
    dropDown.classList.toggle('show');
  });
  
  countries.forEach(country => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'listOption';
    optionDiv.innerHTML = `
        <img src="${country.img}" />
        <span >${country.name}</span>
    `;
    dropDown.appendChild(optionDiv);
    
  });
  
  dropDown.addEventListener('click', function(e) {
    if (e.target.closest('.listOption')) {
        const selectedCountry = e.target.closest('.listOption').querySelector('span').textContent;
        const selectedImage = e.target.closest('.listOption').querySelector('img').src;
  
        document.getElementById('dropDown-country-name').textContent = selectedCountry;
        document.getElementById('dropDown-image').src = selectedImage;
  
        dropDown.classList.remove('show'); 
    }
  });
  
  document.addEventListener('click', function(event) {
    if (!event.target.closest('#select-list-data') && !event.target.closest('#dropDown')) {
        dropDown.classList.remove('show'); 
    }
  });