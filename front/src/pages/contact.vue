<template>
  <layout-all>
    <div class="body">
      <section id="hire">
        <h1>Contact Me</h1>

        <form>
          <div class="field name-box">
            <input
              type="text"
              id="name"
              placeholder="Who Are You?"
              v-model="name"
              @blur="isValid"
              :class="addName"
            />
            <label for="name">Name</label>
            <span class="ss-icon" v-if="isName">check</span>
          </div>

          <div class="field email-box">
            <input
              type="text"
              id="email"
              placeholder="name@email.com"
              v-model="email"
              @blur="isValid"
              :class="addEmail"
            />
            <label for="email">Email</label>
            <span class="ss-icon" v-if="isEmail">check</span>
          </div>

          <div class="field msg-box">
            <textarea
              id="msg"
              rows="4"
              placeholder="Your message goes here..."
              v-model="message"
              @blur="isValid"
              :class="addMessage"
            />

            <label for="msg">Msg</label>
            <span class="ss-icon" v-if="isMessage">check</span>
          </div>

          <input class="button" type="submit" value="Send" />
        </form>
      </section>
    </div>
  </layout-all>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      isName: false,
      isEmail: false,
      isMessage: false,
    };
  },
  methods: {
    isValid() {
      if (this.name !== "") {
        this.isName = true;
      } else {
        this.isName = false;
      }
      if (this.email !== "") {
        this.isEmail = true;
      } else {
        this.isEmail = false;
      }
      if (this.message !== "") {
        this.isMessage = true;
      } else {
        this.isMessage = false;
      }
    },
  },
  computed: {
    addName() {
      return this.isName ? "focused" : "";
    },
    addEmail() {
      return this.isEmail ? "focused" : "";
    },
    addMessage() {
      return this.isMessage ? "focused" : "";
    },
  },
};
</script>

<style lang="scss" scoped>
// Grid
@mixin grid($column) {
  width: (100% / 12) * $column;
  margin: 0 auto;
}

// Transition Ease
@mixin ease($time: 333ms, $attr: all, $curve: ease-in-out) {
  -webkit-transition: $attr $time $curve;
  -moz-transition: $attr $time $curve;
  -o-transition: $attr $time $curve;
  -ms-transition: $attr $time $curve;
  transition: $attr $time $curve;
}

//-- Lato --//
@mixin lato-1 {
  font-family: "Lato", sans-serif;
  font-weight: 100;
}
@mixin lato-1-i {
  @include lato-1;
  font-style: italic;
}

@mixin lato-3 {
  font-family: "Lato", sans-serif;
  font-weight: 300;
}
@mixin lato-3-i {
  @include lato-3;
  font-style: italic;
}

@mixin lato-4 {
  font-family: "Lato", sans-serif;
  font-weight: 400;
}
@mixin lato-4-i {
  @include lato-4;
  font-style: italic;
}

@mixin lato-7 {
  font-family: "Lato", sans-serif;
  font-weight: 700;
}
@mixin lato-7-i {
  @include lato-7;
  font-style: italic;
}

@mixin lato-9 {
  font-family: "Lato", sans-serif;
  font-weight: 900;
}
@mixin lato-9-i {
  @include lato-9;
  font-style: italic;
}

// Colors
$blue: #313a3d;
$orange: #fd9638;
$dark-orange: darken($orange, 20%);
$grey: #b6b6b6;
$light-grey: lighten($grey, 15%);

$background: #efefef;
$field-color: #e8e9ea;

body {
  background: $background;
  font-size: 62.5%;
  @include lato-3;
  color: $grey;

  section {
    background: white;
    margin: 60px auto 120px;
    /* border-top: 15px solid $blue; */
    text-align: center;
    padding: 50px 0 110px;
    width: 80%;
    max-width: 1100px;

    h1 {
      margin-bottom: 40px;
      font-size: 4em;
      text-transform: uppercase;
      @include lato-1;
    }
  }
}

// Form
form {
  @include grid(7);

  .field {
    width: 100%;
    position: relative;
    margin-bottom: 15px;

    $hover-label-width: 18%;
    $placeholder-bumper: 1.5%;
    $label-padding: 18px;

    // Label
    label {
      text-transform: uppercase;
      position: absolute;
      top: 0;
      left: 0;
      background: $blue;
      width: 100%;
      padding: ($label-padding + 0px) 0;
      font-size: 1.45em;
      letter-spacing: 0.075em;

      @include ease(333ms);

      // Checkmark
      + span {
        font-family: "SSStandard";

        color: white;
        display: block;
        position: absolute;
        top: 12px;
        left: 7%;
        font-size: 2.5em;
        text-shadow: 1px 2px 0 $dark-orange;

        @include ease(333ms);
      }
    }

    // Fields
    input[type="text"],
    textarea {
      border: none;
      background: $field-color;
      width: 100% - $hover-label-width - $placeholder-bumper;
      margin: 0;
      padding: $label-padding 0;
      padding-left: $hover-label-width + $placeholder-bumper;
      color: $blue;
      font-size: 1.4em;
      letter-spacing: 0.05em;
      text-transform: uppercase;

      &#msg {
        height: 18px;
        resize: none;
        @include ease(333ms);
      }

      // Focus and JS Toggle Class
      &:focus,
      &.focused {
        outline: none;

        &#msg {
          padding-bottom: 150px;
        }

        + label {
          width: $hover-label-width;
          background: $orange;
          color: $blue;
        }
      }

      // JS Toggle Class
      &.focused {
        + label {
          color: $orange;
        }
      }
    }

    // Field Hover
    &:hover {
      label {
        width: $hover-label-width;
        background: $blue;
        color: white;
      }
    }
  }

  // Submit Button
  input[type="submit"] {
    background: $orange;
    color: white;
    -webkit-appearance: none;
    border: none;
    text-transform: uppercase;
    position: relative;
    padding: 13px 50px;
    font-size: 1.4em;
    letter-spacing: 0.1em;
    margin-top: 1em;
    @include lato-3;
    @include ease;

    &:hover {
      background: $blue;
      color: $orange;
    }

    &:focus {
      outline: none;
      background: $dark-orange;
    }
  }
}
</style>
