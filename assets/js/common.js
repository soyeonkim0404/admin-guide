"use strict";
document.addEventListener("DOMContentLoaded", function () {
  /*modal*/
  const btns = document.querySelectorAll("[data-modalid]");
  const closeModals = document.querySelectorAll(".close-modal");
  const dims = document.querySelectorAll(".dim");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      document.body.classList.add("modal-open");
      document.querySelector(btn.dataset.modalid).classList.add("open");
    });
  });

  closeModals.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.closest('[class^="modal-"]');
      document.body.classList.remove("modal-open");
      modal.classList.remove("open");
    });
  });

  dims.forEach((dim) => {
    dim.addEventListener("click", () => {
      const modalTarget = dim.closest('[class^="modal-"]');
      document.body.classList.remove("modal-open");
      modalTarget.classList.remove("open");
    });
  });

  /*sidebar*/
  const sidebar = document.querySelector(".sidebar");
  const sidebarOpenBtn = document.querySelector("#sidebar-open");
  const sidebarCloseBtn = document.querySelector("#sidebar-close");
  const sidebarLockBtn = document.querySelector("#lock-icon");
  const toggleLock = () => {
    sidebar.classList.toggle("locked");
    if (!sidebar.classList.contains("locked")) {
      document.body.classList.remove("sidebar-locked");
      sidebar.classList.add("hoverable");
      sidebarLockBtn.classList.replace("bx-lock-alt", "bx-lock-open-alt");
    } else {
      document.body.classList.add("sidebar-locked");
      sidebar.classList.remove("hoverable");
      sidebarLockBtn.classList.replace("bx-lock-open-alt", "bx-lock-alt");
    }
  };
  // Function to hide the sidebar when the mouse leaves
  const hideSidebar = () => {
    if (sidebar.classList.contains("hoverable")) {
      sidebar.classList.add("close");
    }
  };
  // Function to show the sidebar when the mouse enter
  const showSidebar = () => {
    if (sidebar.classList.contains("hoverable")) {
      sidebar.classList.remove("close");
    }
  };
  const toggleSidebar = () => {
    sidebar.classList.toggle("close");
  };
  if (window.innerWidth < 800) {
    document.body.classList.remove("sidebar-locked");
    sidebar.classList.add("close");
    sidebar.classList.remove("locked");
    sidebar.classList.remove("hoverable");
  }
  // Adding event listeners to buttons and sidebar for the corresponding actions
  sidebarLockBtn.addEventListener("click", toggleLock);
  sidebar.addEventListener("mouseleave", hideSidebar);
  sidebar.addEventListener("mouseenter", showSidebar);
  //sidebarOpenBtn.addEventListener("click", toggleSidebar);
  //sidebarCloseBtn.addEventListener("click", toggleSidebar);

  /*sidebar - dropdown menu*/
  const dropdownBtns = document.querySelectorAll(".dropdown-btn");
  console.log(dropdownBtns);
  dropdownBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const dropdown = e.currentTarget.nextElementSibling;
      console.log(dropdown);

      dropdown.classList.toggle("show");
      document
        .querySelectorAll(".dropdown-btn + .dropdown-list")
        .forEach((dropdown) => {
          if (dropdown !== e.currentTarget.nextElementSibling) {
            dropdown.classList.remove("show");
          }
        });
    });
  });
});
