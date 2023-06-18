import React from "react";
function Header() {
  return (
    <div class="container Banner">
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <i
            class="fa-solid fa-utensils fa-2xl"
            style={{ color: "#e4e7ec" }}
          ></i>
          &nbsp; &nbsp;
          <span class="fs-4"> The Pantry</span>
        </a>

        <ul class="nav nav-pills">
          <li class="nav-item">
            <a href="/favorites" class="nav-link active" aria-current="page">
              Favorites
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
