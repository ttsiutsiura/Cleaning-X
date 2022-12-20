const modalEl = basicLightbox.create(`<div class="modal">
      <div class="modal-info">
        <div class="modal-info__top">
          <h4 class="modal-info__title">
            Request a free <br />
            cleaning quote today
          </h4>
          <p class="modal-info__subtitle">
            In dignissim euismod pretium amet enim a eu nam <br />
            ut urna accumsan pellentesque lacus duis pharetra <br />
            eutortor.
          </p>
          <address class="tel">
            <a href="tel:(414) 567 - 2109" class="tel__button">
              <svg width="34" height="34" class="tel__icon">
                <use href="/images/icons.svg#icon-phone"></use>
              </svg>
            </a>
            <p class="tel__text">
              Call us now<br />
              <span class="tel__number">(414) 567 - 2109</span>
            </p>
          </address>
        </div>
        <div class="modal-info__bottom">
          <b class="modal-info__question">Not convinced yet?</b>
          <p class="modal-info__text">
            Massa bibendum consectetur maurisid gravida <br />
            purus, dolor dui amet morbi non nunc urna <br />
            purus diam.
          </p>
          <button class="secondary-button">Browse our packages</button>
        </div>
      </div>
      <div class="modal__form">
        <form name="modal-form" class="form">
          <div class="modal-form__thumb">
            <div class="modal-form__group">
              <label for="full-name" class="modal-form__label">Full name</label>
              <input type="text" id="full-name" name="full-name" class="modal-form__input" />
            </div>

            <div class="modal-form__group">
              <label for="phone-number" class="modal-form__label">Phone number</label>
              <input type="text" id="phone-number" name="phone-number" class="modal-form__input" />
            </div>

            <div class="modal-form__group">
              <label for="address" class="modal-form__label">Address</label>
              <input type="text" id="address" name="address" class="modal-form__input" />
            </div>

            <div class="modal-form__group">
              <label for="email" class="modal-form__label">Email</label>
              <input type="text" class="modal-form__input" />
            </div>

            <div class="modal-form__group">
              <label for="service" class="modal-form__label">Requested service</label>
              <input type="text" name="service" id="service" class="modal-form__input" />
            </div>

            <div class="modal-form__group">
              <label for="day-of-service" class="modal-form__label">Day of service</label>
              <input
                type="text"
                name="day-of-servicce"
                id="day-of-service"
                class="modal-form__input"
              />
            </div>
          </div>

          <div class="modal-form__group">
            <label for="note" class="modal-form__label">Add a note</label>
            <textarea
              name="note"
              id="note"
              cols="30"
              rows="10"
              class="modal-form__textarea"
            ></textarea>
          </div>
          <button class="form-button">Submit message</button>
        </form>
      </div>
    </div>`);

const formButtonEl = document.querySelector('[data-modal-open]');
formButtonEl.addEventListener('click', onButtonCLick);

function onButtonCLick() {
  modalEl.show();
}
