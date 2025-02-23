const books = [
    { id: 1, title: "Crime and Punishment", author: "Fyodor Dostoevsky", price: 499, rating: 4.22, image: "https://c.media-amazon.com/images/I/31Q3Lt4ir3L._SY445_SX342_.jpg", genre: "literary-fiction" },
    { id: 2, title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", price: 399, rating: 4.32, image: "https://c.media-amazon.com/images/I/415sjYk3e-L._SY445_SX342_.jpg", genre: "literary-fiction" },
    { id: 3, title: "The Bell Jar", author: "Sylvia Plath", price: 399, rating: 4.01, image: "https://c.media-amazon.com/images/I/41LU+AaRIQL._SY445_SX342_.jpg", genre: "literary-fiction" },
    { id: 3, title: "Men Without Women", author: "Haruki Murakami", price: 349, rating: 3.75, image: "https://i.pinimg.com/564x/42/a9/ca/42a9ca7d3a7a2c975989b3a95f963bdc.jpg", genre: "literary-fiction" },
    { id: 5, title: "The Wife Upstairs", author: "Frieda McFadden", price: 349, rating: 4.05, image: "https://c.media-amazon.com/images/I/41W4iQk++IL._SY445_SX342_.jpg" , genre: "thriller/mystery"},
    { id: 6, title: "The Housemaid", author: "Frieda McFadden", price: 399, rating: 4.18, image: "https://c.media-amazon.com/images/I/81keZ6LpNWL._SY385_.jpg" , genre: "thriller/mystery"},
    { id: 7, title: "Norwegian Wood", author: "Haruki Murakami", price: 449, rating: 3.87, image: "https://c.media-amazon.com/images/I/411f6XJtWqL._SY445_SX342_.jpg", genre: "contemporary-fiction" },
    { id: 8, title: "Kafka on the Shore", author: "Haruki Murakami", price: 349, rating: 4.13, image: "https://c.media-amazon.com/images/I/3190fsfp48L._SY445_SX342_.jpg", genre: "contemporary-fiction" },
    { id: 9, title: "To Kill a Mockingbird", author: "Harper Lee", price: 399, rating: 4.27, image: "https://c.media-amazon.com/images/I/81gepf1eMqL._SY385_.jpg", genre: "literary-fiction"},
    { id: 10, title: "1984", author: "George Orwell", price: 399, rating: 4.18, image: "https://c.media-amazon.com/images/I/513pvzyerWL._SY445_SX342_.jpg", genre: "literary-fiction" },
    { id: 11, title: "Pride and Prejudice", author: "Jane Austen", price: 499, rating: 4.26, image: "https://c.media-amazon.com/images/I/412bjj40hoL._SY445_SX342_.jpg", genre: "literary-fiction" },
    { id: 12, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 349, rating: 3.92, image: "https://c.media-amazon.com/images/I/71JP5cQXHqL._SY385_.jpg", genre: "literary-fiction" },
    { id: 13, title: "The Catcher in the Rye", author: "J.D. Salinger", price: 299, rating: 3.81, image: "https://c.media-amazon.com/images/I/418bOQWiRBL._SY445_SX342_.jpg", genre: "literary-fiction" },
    { id: 14, title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", price: 349, rating: 4.08, image: "https://c.media-amazon.com/images/I/51fbxh0TD-L._SY445_SX342_.jpg", genre: "literary-fiction" },
    { id: 15, title: "White Nights", author: "Fyodor Dostoyevsky", price: 299, rating: 4.06, image: "https://c.media-amazon.com/images/I/41hykoV3d-L._SY385_.jpg", genre:"literary-fiction" },
    { id: 16, title: "The Da Vinci Code", author: "Dan Brown", price: 399, rating: 3.84, image: "https://c.media-amazon.com/images/I/4182WHOHqUL._SY445_SX342_.jpg", genre: "thriller/mystery"},
    { id: 17, title: "A Little Life", author: "Hanya Yanagihara", price: 549, rating: 4.32, image: "https://i.pinimg.com/564x/58/38/f2/5838f28be0ce5dfeeef03eaeb5d81465.jpg", genre: "contemporary-fiction" },
    { id: 18, title: "The Silent Patient", author: "Alex Michaelides", price: 299, rating: 4.18, image: "https://c.media-amazon.com/images/I/81JJPDNlxSL._SY385_.jpg", genre: "thriller/mystery" },
    { id: 19, title: "If We Were Villains", author: "M.L. Rio", price: 599, rating: 4.15, image: "https://c.media-amazon.com/images/I/41NEMSjYBOL._SY445_SX342_.jpg", genre: "dark-academia" },
    { id: 20, title: "The Secret History", author: "Donna Tartt", price: 599, rating: 4.17, image: "https://c.media-amazon.com/images/I/416lUyEwujL._SY445_SX342_.jpg", genre: "dark-academia" },
    { id: 21, title: "A Man Called Ove", author: "Fredrik Backman", price: 249, rating: 4.38, image: "https://i.pinimg.com/564x/0e/8d/f1/0e8df1747723491f9574bdf6c9a1f5f5.jpg", genre: "contemporary-fiction" },
    { id: 22, title: "The Fine Print", author: "Lauren Asher", price: 399, rating: 3.84, image: "https://c.media-amazon.com/images/I/51kxpnfQQgL._SY445_SX342_.jpg", genre:"romance" },
    { id: 23, title: "The Love Hypothesis", author: "Ali Hazelwood", price: 399, rating: 4.14, image: "https://c.media-amazon.com/images/I/81plBFoPgtL._SY385_.jpg", genre: "romance" },
    { id: 24, title: "The Spanish Love Deception", author: "Elena Armas", price: 349, rating: 3.82, image: "https://c.media-amazon.com/images/I/41pFKKRbXiL._SY445_SX342_.jpg", genre: "romance" },
    { id: 25, title: "The Fault in Our Stars", author: "John Green", price: 299, rating: 4.17, image: "https://c.media-amazon.com/images/I/51r27MDeQQL._SY445_SX342_.jpg", genre: "romance" },
    { id: 26, title: "The Book Thief", author: "Markus Zusak", price: 449, rating: 4.35, image: "https://c.media-amazon.com/images/I/51APkyJzNlL._SY445_SX342_.jpg", genre: "contemporary-fiction" },
    { id: 27, title: "The Girl in Room 105", author: "Chetan Bhagat", price: 249, rating: 3.57, image: "https://i.pinimg.com/564x/1e/12/3c/1e123c7c610a46672378f8935dc23dde.jpg", genre: "thriller/mystery" },
    { id: 28, title: "One Arranged Murder", author: "Chetan Bhagat", price: 249, rating: 3.65, image: "https://c.media-amazon.com/images/I/41WmwGxaoTL._SY445_SX342_.jpg", genre: "thriller/mystery" },
    { id: 29, title: "The Girl in the Glass Case", author: "Devashish Sardana", price: 349, rating: 4.04, image: "https://c.media-amazon.com/images/I/41Dr37NRrNL._SY445_SX342_.jpg", genre: "thriller/mystery" },
    { id: 30, title: "A Good Girl's Guide to Murder", author: "Holly Jackson", price: 299, rating: 4.32, image: "https://c.media-amazon.com/images/I/51wlOYeH4BL._SY445_SX342_.jpg", genre: "thriller/mystery" },
    { id: 31, title: "Good Girl, Bad Blood", author: "Holly Jackson", price: 299, rating: 4.29, image: "https://i.pinimg.com/564x/6b/6c/20/6b6c20372a4e28669a69011689f8be50.jpg", genre: "thriller/mystery" },
    { id: 32, title: "As Good As Dead", author: "Holly Jackson", price: 299, rating: 4.21, image: "https://i.pinimg.com/564x/96/6b/36/966b36fa5486e201ef9a82c610b9f467.jpg", genre: "thriller/mystery" },
    { id: 33, title: "A Thousand Boy Kisses", author: "Tillie Cole", price: 349, rating: 4.07, image: "https://c.media-amazon.com/images/I/41lUo+O2gcL._SY445_SX342_.jpg", genre: "a thousand boy kisses" },
    { id: 34, title: "I'm Glad My Mom Died", author: "Jenette McCurdy", price: 449, rating: 4.46, image: "https://c.media-amazon.com/images/I/41jv2c06JOL._SY445_SX342_.jpg", genre: "non-fiction" },
    { id: 35, title: "The Good Lie", author: "A.R. Torre", price: 499, rating: 4.13, image: "https://c.media-amazon.com/images/I/41DoX73VKUL._SY445_SX342_.jpg", genre: "thriller/mystery" },
    { id: 36, title: "Rock Paper Scissors", author: "Alice Feeney", price: 349, rating: 3.92, image: "https://c.media-amazon.com/images/I/41iK5OPA8CL._SY445_SX342_.jpg", genre: "thriller/mystery" },
    { id: 37, title: "Seven Husbands of Evelyn Hugo", author: "Taylor Reid", price: 399, rating: 4.42, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1664458703i/32620332.jpg", genre: "contemporary-fiction" },
    { id: 38, title: "Normal People", author: "Sally Rooney", price: 399, rating: 3.81, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1571423190i/41057294.jpg", genre: "contemporary-fiction" },
    { id: 39, title: "Mrs. Dalloway", author: "Virginia Woolf", price: 449, rating: 3.79, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1646148221i/14942.jpg", genre: "literary-fiction" },
    { id: 40, title: "The Stranger", author: "Albert Camus", price: 399, rating: 4.02, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1590930002i/49552.jpg", genre: "literary-fiction" },
    { id: 41, title: "When Breath Becomes Air", author: "Paul Kalanithi", price: 249, rating: 4.40, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1492677644i/25899336.jpg", genre: "non-fiction" },
    { id: 42, title: "How to Win Friends and Influence People", author: "Dale Carnegie", price: 249, rating: 4.22, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1442726934i/4865.jpg", genre: "non-fiction" },
    { id: 43, title: "Life of Pi", author: "Yann Martel", price: 249, rating: 3.94, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631251689i/4214.jpg", genre: "contemporary-fiction" },
    { id: 44, title: "Anxious People", author: "Fredrik Backman", price: 499, rating: 4.18, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1620425700i/50272752.jpg", genre: "contemporary-fiction" },
    { id: 45, title: "Born a Crime", author: "Trevor Noah", price: 349, rating: 4.49, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1473867911i/29780253.jpg", genre: "non-fiction" },
    { id: 46, title: "The Devil in the White City", author: "Erik Larson", price: 249, rating: 4.00, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1583433024i/397483.jpg", genre: "non-fiction" },
    { id: 47, title: "The Kite Runner", author: "Khaled Hosseini", price: 299, rating: 4.35, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1579036753i/77203.jpg", genre: "contemporary-fiction" },
    { id: 48, title: "The Goldfinch", author: "Donna Tartt", price: 449, rating: 3.95, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1378710146i/17333223.jpg", genre: "contemporary-fiction" },
    { id: 49, title: "The City & the City", author: "China Mieville", price: 399, rating: 3.90, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320475957i/4703581.jpg", genre: "dark-academia" },
    { id: 50, title: "Murder in the Cathedral", author: "T.S. Eliot", price: 399, rating: 3.72, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388192113i/33052.jpg", genre: "dark-academia" },
    { id: 51, title: "The Wright Brothers", author: "David McCullough", price: 249, rating: 4.17, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1430942575i/22609391.jpg", genre: "non-fiction" },
    { id: 52, title: "Thinking, Fast and Slow", author: "Daniel Kahneman", price: 249, rating: 4.18, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1317793965i/11468377.jpg", genre: "non-fiction" },
    { id: 53, title: "The Little Friend", author: " Donna Tartt", price: 299, rating: 3.47, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327936589i/775346.jpg", genre: "dark-academia" },
    { id: 54, title: "The Shadow of the Wind", author: "Carlos Ruiz Zafón", price: 299, rating: 4.30, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1628791882i/1232.jpg", genre: "dark-academia" },
    { id: 55, title: "Frankenstein: The 1818 Text", author: "Mary Shelley", price: 349, rating: 3.87, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631088473i/35031085.jpg", genre: "dark-academia" },
    { id: 56, title: "The Picture of Dorian Gray", author: "Oscar Wilde", price: 399, rating: 4.13, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546103428i/5297.jpg", genre: "dark-academia" },
    { id: 57, title: "Becoming", author: "Michelle Obama", price: 449, rating: 4.45, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1528206996i/38746485.jpg", genre: "non-fiction" },
    { id: 58, title: "Just Mercy", author: "Bryan Stevenson", price: 349, rating: 4.63, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1635827409i/20342617.jpg", genre: "non-fiction" },
    { id: 59, title: "Bunny", author: "Mona Awad", price: 399, rating: 3.50, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1588043687i/53285047.jpg", genre: "dark-academia" },
    { id: 60, title: "Never Let Me Go", author: "Kazuo Ishiguro", price: 399, rating: 3.85, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1353048590i/6334.jpg", genre: "dark-academia" },
    { id: 61, title: "Little Secrets", author: "Jennifer Hillier", price: 299, rating: 4.22, image: "https://i.pinimg.com/564x/2a/3f/f2/2a3ff2bd7809e95cf3f64b1e51891623.jpg", genre: "thriller/mystery" },
    { id: 62, title: "Daisy Darker", author: "Alice Feeney", price: 349, rating: 3.72, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1639604124i/59808050.jpg", genre: "thriller/mystery" },
    { id: 63, title: "Better than the Movies", author: "Lynn Painter", price: 299, rating: 4.29, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1618150545i/55710822.jpg", genre: "romance" },
    { id: 64, title: "Love and Other Words", author: "Christina Lauren", price: 299, rating: 4.25, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1667534514i/36206591.jpg", genre: "romance" },
    { id: 65, title: "The Woman in the Window", author: "A.J. Finn", price: 349, rating: 3.95, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1528225499i/40389527.jpg", genre: "thriller/mystery" },
    { id: 66, title: "Behind Closed Doors", author: "B.A. Paris", price: 499, rating: 3.98, image: "https://c.media-amazon.com/images/I/51RlahqTctL._SY445_SX342_.jpg", genre: "thriller/mystery" },
    { id: 67, title: "Things We Never Got Over", author: "Lucy Score", price: 299, rating: 4.16, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1641629293i/60060431.jpg", genre: "romance" },
    { id: 68, title: "Things We Hide from the Light", author: "Lucy Score", price: 299, rating: 4.06, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1718386717i/62022434.jpg", genre: "romance" },
    { id: 69, title: "Jane Eyre", author: "Charlotte Brontë", price: 599, rating: 4.15, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320548670i/9715309.jpg", genre: "romance" },
    { id: 70, title: "Before We Were Strangers", author: "Renne Carlino", price: 299, rating: 4.08, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1438012963i/23309634.jpg", genre: "romance" },
    { id: 71, title: "Never Lie", author: "Frieda McFadden", price: 349, rating: 4.09, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1661428846i/62080187.jpg", genre: "thriller/mystery" },
    { id: 72, title: "His & Hers", author: "Alice Feeney", price: 349, rating: 4.08, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1576918720i/48752986.jpg", genre: "thriller/mystery" },
    { id: 73, title: "A Risk on Forever", author: "N.S. Perkins", price: 349, rating: 3.99, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1628728961i/58454417.jpg", genre: "romance" },
    { id: 74, title: "The Paris Apartment", author: "Lucy Foley", price: 299, rating: 3.66, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1645550948i/58468990.jpg", genre: "thriller/mystery" },
    { id: 75, title: "That Night", author: "Nidhi Upadhyay", price: 299, rating: 3.78, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1677886912i/70921503.jpg", genre: "thriller/mystery" }
];

let cart = [];
let currentUser = null;

function displayBooks(booksToShow) {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
    booksToShow.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.className = 'book-card';
        bookElement.innerHTML = `
            <img src="${book.image}" alt="${book.title} book cover" width="150" height="200">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <p>Price: ₹${book.price.toFixed(2)}</p>
            <button onclick="addToCart(${book.id})">Add to Cart</button>
        `;
        bookList.appendChild(bookElement);
    });
}

function filterByGenre(genre) {
    const filteredBooks = books.filter(book => book.genre === genre);
    displayBooks(filteredBooks);
}

function searchBooks() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm) || 
        book.author.toLowerCase().includes(searchTerm)
    );
    displayBooks(filteredBooks);
}

function addToCart(bookId) {
    if (!currentUser) {
        showAuthModal();
        return;
    }
    const book = books.find(b => b.id === bookId);
    if (book) {
        const existingItem = cart.find(item => item.id === bookId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...book, quantity: 1 });
        }
        updateCart();
    }
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const cartCount = document.getElementById('cartCount');
    cartItems.innerHTML = '';
    let total = 0;
    let count = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.title} book cover" class="cart-item-image">
            <div class="cart-item-details">
                <h3>${item.title}</h3>
                <p>Price: ₹${item.price.toFixed(2)}</p>
                <div class="cart-item-quantity">
                    <button onclick="decreaseQuantity(${item.id})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="increaseQuantity(${item.id})">+</button>
                </div>
            </div>
            <button onclick="removeFromCart(${item.id})" class="remove-btn">Remove</button>
        `;
        cartItems.appendChild(itemElement);
        total += item.price * item.quantity;
        count += item.quantity;
    });

    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = count;
}

function increaseQuantity(bookId) {
    const item = cart.find(item => item.id === bookId);
    if (item) {
        item.quantity += 1;
        updateCart();
    }
}

function decreaseQuantity(bookId) {
    const item = cart.find(item => item.id === bookId);
    if (item && item.quantity > 1) {
        item.quantity -= 1;
        updateCart();
    } else if (item && item.quantity === 1) {
        removeFromCart(bookId);
    }
}

function removeFromCart(bookId) {
    const index = cart.findIndex(item => item.id === bookId);
    if (index !== -1) {
        cart.splice(index, 1);
        updateCart();
    }
}

function showAuthModal() {
    document.getElementById('authModal').style.display = 'block';
}

function closeAuthModal() {
    document.getElementById('authModal').style.display = 'none';
}

function showCartModal() {
    document.getElementById('cartModal').style.display = 'block';
}

function closeCartModal() {
    document.getElementById('cartModal').style.display = 'none';
}

function showLoginContent() {
    document.getElementById('signupContent').style.display = 'none';
    document.getElementById('loginContent').style.display = 'block';
}

function showSignupContent() {
    document.getElementById('loginContent').style.display = 'none';
    document.getElementById('signupContent').style.display = 'block';
}

function signup(event) {
    event.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        alert('User with this email already exists. Please login.');
        showLoginContent();
        return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    closeAuthModal();
    updateUIAfterAuth();
    alert('Signup successful! You can now add books to your cart.');
}

function login(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        closeAuthModal();
        updateUIAfterAuth();
        alert('Login successful! You can now add books to your cart.');
    } else {
        alert('Invalid email or password. Please try again.');
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    cart = [];
    updateUIAfterAuth();
    updateCart();
}

function updateUIAfterAuth() {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const ul = document.getElementById('ul');
    ul.style.marginLeft = '20px';
    ul.style.display = 'flex';
    ul.style.alignItems = 'center';
    ul.style.justifyContent = 'center';

    if (currentUser) {
        loginBtn.style.display = 'none';
        signupBtn.style.display = 'none';
        logoutBtn.style.display = 'inline-block';
        welcomeMessage.textContent = `Welcome, ${currentUser.name}!`;
        welcomeMessage.style.display = 'block';
    } else {
        loginBtn.style.display = 'inline-block';
        signupBtn.style.display = 'inline-block';
        logoutBtn.style.display = 'none';
        welcomeMessage.style.display = 'none';
    }
}


// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayBooks(books);

    // Add event listeners for genre boxes
    const genreBoxes = document.querySelectorAll('.genre-box');
    genreBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const genre = this.getAttribute('data-genre');
            filterByGenre(genre);
        });
    });

    // Home button functionality
    document.getElementById('homeBtn').addEventListener('click', function(e) {
        e.preventDefault();
        displayBooks(books);
    });

    // Search functionality
    document.getElementById('searchBtn').addEventListener('click', searchBooks);
    document.getElementById('searchInput').addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            searchBooks();
        }
    });

    // Auth modal events
    document.getElementById('loginBtn').addEventListener('click', function() {
        showAuthModal();
        showLoginContent();
    });
    document.getElementById('signupBtn').addEventListener('click', function() {
        showAuthModal();
        showSignupContent();
    });
    document.getElementById('showLogin').addEventListener('click', showLoginContent);
    document.getElementById('showSignup').addEventListener('click', showSignupContent);
    document.querySelector('#authModal .close').addEventListener('click', closeAuthModal);

    // Cart modal events
    document.getElementById('cartBtn').addEventListener('click', showCartModal);
    document.querySelector('#cartModal .close').addEventListener('click', closeCartModal);

    // Form submission events
    document.getElementById('signupForm').addEventListener('submit', signup);
    document.getElementById('loginForm').addEventListener('submit', login);

    document.getElementById('checkoutBtn').addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Checkout functionality would be implemented here.');
        } else {
            alert('Your cart is empty.');
        }
    });

    // Logout functionality
    document.getElementById('logoutBtn').addEventListener('click', logout);

    // Check if user is already logged in
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
        currentUser = JSON.parse(storedUser);
        updateUIAfterAuth();
    }

    updateUIAfterAuth();
});

// Close modals when clicking outside
window.onclick = function(event) {
    if (event.target == document.getElementById('authModal')) {
        closeAuthModal();
    }
    if (event.target == document.getElementById('cartModal')) {
        closeCartModal();
    }
}