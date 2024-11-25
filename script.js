const addBook = document.querySelector('#add-book');
const formDiv = document.querySelector('#form');
const form = document.querySelector('#details');
const overlay = document.querySelector('#overlay');
const grid = document.querySelector('#book-grid');

formDiv.style.display = 'none';

addBook.addEventListener('click',function() {
  overlay.style.display = 'block';
  formDiv.style.display = 'flex';
});
form.addEventListener('submit',newBook);

function newBook(e){
  
  e.preventDefault();
  
  const book = document.createElement("div");
  const heading = document.createElement("h2");
  const author = document.createElement("h2");
  const pages = document.createElement("h2");
  const read_status = document.createElement("button");
  const remove = document.createElement("button");
  
  const book_name = document.getElementById('book').value;
  const author_name = document.getElementById('author').value;
  const pages_no = document.getElementById('pages').value;
  const checked = document.getElementById('checkbox').checked;

  heading.textContent = book_name;
  author.textContent = author_name;
  pages.textContent = pages_no + " pages";

  if (checked) {
      read_status.textContent = "Read";
      read_status.classList.add("read");
    }
  else {
      read_status.textContent = "Unread";
      read_status.classList.add("unread");
    }

  remove.textContent = "Remove";
  remove.classList.add("remove");
  remove.addEventListener('click',function (){
    grid.removeChild(book);
  });

  read_status.addEventListener('click',function (){
    if (read_status.textContent == 'Read'){
      read_status.textContent = "Unread";
      read_status.classList.remove('read');
      read_status.classList.add("unread");
    }
    else {
      read_status.textContent = "Read";
      read_status.classList.remove('unread');
      read_status.classList.add("read");
    }
  });

  

  book.appendChild(heading);
  book.appendChild(author);
  book.appendChild(pages);
  book.appendChild(read_status);
  book.appendChild(remove);

  book.classList.add("book");
  
  grid.appendChild(book);
  
  form.reset();
  formDiv.style.display = 'none';
  overlay.style.display = 'none';
}

overlay.addEventListener('click', function() {
  form.reset();
  formDiv.style.display = 'none';
  overlay.style.display = 'none';
});