var ID = function () {
  return '_' + Math.random().toString( 36 ).substr( 2, 9 );
};
function disablePrimitiveEtep ( step_config ) {
  let valid = true;
  for ( let l = 0, length_l = step_config.steps[ step_config.show ].rows.length; l < length_l; l++ ) {
    for ( let j = 0, length_j = step_config.steps[ step_config.show ].rows[ l ].fields.length; j < length_j; j++ ) {
      const field = step_config.steps[ step_config.show ].rows[ l ].fields[ j ];
      valid = !field.invalid;
      if ( !valid ) {
        break;
      }
    }
  }
  if ( step_config.hasOwnProperty( 'buttons' ) ) {
    const conclude = document.getElementById( step_config.buttons.conclude );
    if ( !conclude.hasAttribute( 'style' ) ) { conclude.setAttribute( 'style', '' ); }
    const next = document.getElementById( step_config.buttons.next );
    if ( !next.hasAttribute( 'style' ) ) { next.setAttribute( 'style', '' ); }
    const previus = document.getElementById( step_config.buttons.previus );
    if ( !previus.hasAttribute( 'style' ) ) { previus.setAttribute( 'style', '' ); }
    if ( conclude ) {
      if ( valid ) {
        conclude.removeAttribute( 'disabled' );
      } else {
        conclude.setAttribute( 'disabled', 'disabled' );
      }
    }
    if ( next ) {
      if ( valid ) {
        next.removeAttribute( 'disabled' );
      } else {
        next.setAttribute( 'disabled', 'disabled' );
      }
    }
  }
}

function setValue ( input_key, value ) {
  const container = document.getElementById( this.container_id );
  setTimeout( () => {
    const input = container.querySelector( `[name="${ input_key }"]` );
    const label = container.querySelector( `[for="field-input-${ input.getAttribute( 'type' ) }-${ input_key }"]` );
    if ( input ) {
      input.value = value;
      input.focus();
    }
    if ( label ) {
      label.classList.add( 'active' );
    }
  }, 50 );
}

function setFocus ( input_key ) {
  const container = document.getElementById( this.container_id );
  setTimeout( () => {
    const input = container.querySelector( `[name="${ input_key }"]` );
    const label = container.querySelector( `[for="field-input-${ input.getAttribute( 'type' ) }-${ input_key }"]` );
    if ( input ) {
      input.focus();
    }
    if ( label ) {
      label.classList.add( 'active' );
    }
  }, 50 );
}

function build_form ( rows, element, step_config ) {
  if ( element === void 0 ) {
    element = document.createElement( 'div' );
  }
  function create_input ( input_config, append_to ) {
    if ( input_config && input_config.hasOwnProperty( 'key' ) ) {
      if ( !input_config.hasOwnProperty( 'type' ) ) { input_config.type = 'text'; }
      const span_valid_id = ID();
      const col = document.createElement( 'div' );
      col.setAttribute( "class", 'col ' + ( input_config.width ? 's' + input_config.width : 's12' ) );
      const input_field = document.createElement( 'div' );
      input_field.setAttribute( 'class', 'input-field ' + ( input_config.className ? input_config.className : '' ) );
      const input = document.createElement( 'input' );
      input.setAttribute( 'type', input_config.type );
      input_config.id = 'field-input-' + input_config.type + '-' + input_config.key;
      input.setAttribute( 'id', input_config.id );
      input.setAttribute( 'class', 'custom-validate' );
      input.setAttribute( 'value', input_config.defaultValue || '' );
      input.setAttribute( 'name', input_config.key );
      input.setAttribute( 'data-span-validation', span_valid_id );
      function error_handler ( event ) {
        let has_error = false;
        if ( input_config.hasOwnProperty( 'validations' ) ) {
          for ( const validation in input_config.validations ) {
            if ( input_config.validations.hasOwnProperty( validation ) ) {
              if ( typeof input_config.validations[ validation ] === 'function' ) {
                const return_ = input_config.validations[ validation ].apply( null, [ event.target.value ] );
                if ( return_ && typeof return_ === 'object' ) {
                  if ( return_.hasOwnProperty( 'message' ) ) {
                    has_error = true;
                    if ( !input_field.classList.contains( 'invalid' ) ) {
                      input_field.classList.add( 'invalid' )
                    }
                    if ( !event.target.classList.contains( 'invalid' ) ) {
                      event.target.classList.add( 'invalid' )
                    }
                    const span_id = event.target.getAttribute( 'data-span-validation' );
                    if ( span_id ) {
                      const spn = document.getElementById( span_id );
                      if ( spn ) {
                        spn.setAttribute( 'data-error', return_.message );
                        spn.textContent = return_.message;
                      }
                    }
                    break;
                  }
                }
              }
            }
          }
        }
        if ( !has_error ) {
          input_field.classList.remove( 'invalid' );
          event.target.classList.remove( 'invalid' );
          const span_id = event.target.getAttribute( 'data-span-validation' );
          if ( span_id ) {
            const spn = document.getElementById( span_id );
            if ( spn ) {
              spn.textContent = spn.getAttribute( 'data-helper' );
            }
          }
          input_config.invalid = false;
          disablePrimitiveEtep( step_config, true );
        } else {
          input_config.invalid = true;
          disablePrimitiveEtep( step_config, false );
        }
      }
      if ( input_config.hasOwnProperty( 'attrs' ) ) {
        for ( const attr in input_config.attrs ) {
          if ( input_config.attrs.hasOwnProperty( attr ) ) {
            if ( input.hasAttribute( attr ) ) {
              const input_attr_val = input.getAttribute( attr );
              input.setAttribute( attr, input_attr_val + ' ' + input_config.attrs[ attr ] );
            } else {
              input.setAttribute( attr, input_config.attrs[ attr ] );
            }
          }
        }
      }
      if ( input_config.hasOwnProperty( 'on' ) ) {
        for ( const handler in input_config.on ) {
          if ( input_config.on.hasOwnProperty( handler ) ) {
            if ( handler !== 'keyup' && handler !== 'focus' && handler !== 'change' ) {
              input.addEventListener( handler, function Handler ( e ) {
                input_config.on[ handler ].apply( input_config, [ input_config, step_config, e ] );
              } )
            }
          }
        }
      }
      input.addEventListener( 'keyup', function ( event ) {
        error_handler( event );
        input_config.value = event.target.value;
        step_config.model[ input_config.key ] = event.target.value;
        if ( input_config.hasOwnProperty( 'on' ) ) {
          if ( input_config.on.hasOwnProperty( 'keyup' ) ) {
            input_config.on[ 'keyup' ].apply( input_config, [ input_config, step_config, event ] );
          }
        }
      } );
      input.addEventListener( 'focus', function ( event ) {
        error_handler( event );
        if ( input_config.hasOwnProperty( 'on' ) ) {
          if ( input_config.on.hasOwnProperty( 'focus' ) ) {
            input_config.on[ 'focus' ].apply( input_config, [ input_config, step_config, event ] );
          }
        }
      } );
      input.addEventListener( 'change', function ( event ) {
        error_handler( event );
        input_config.value = event.target.value;
        step_config.model[ input_config.key ] = event.target.value;
        if ( input_config.hasOwnProperty( 'on' ) ) {
          if ( input_config.on.hasOwnProperty( 'change' ) ) {
            input_config.on[ 'change' ].apply( input_config, [ input_config, step_config, event ] );
          }
        }
      } );
      const label = document.createElement( 'label' );
      label.setAttribute( 'for', input_config.id );
      label.appendChild( document.createTextNode( input_config.label || '' ) );
      const span = document.createElement( 'span' );
      span.setAttribute( 'id', span_valid_id );
      span.setAttribute( 'class', 'helper-text' );
      span.setAttribute( 'data-error', '' );
      span.setAttribute( 'data-success', '' );
      span.setAttribute( 'data-helper', input_config.helper || '' );
      span.appendChild( document.createTextNode( input_config.helper || '' ) );
      if ( input_config.hasOwnProperty( 'prefix_icon' ) && input_config.prefix_icon ) {
        const p_i = document.createElement( 'i' );
        p_i.setAttribute( 'class', 'material-icons prefix custom' );
        p_i.appendChild( document.createTextNode( input_config.prefix_icon ) );
        input_field.appendChild( p_i );
      }
      input_field.appendChild( input );
      input_field.appendChild( label );
      input_field.appendChild( span );
      col.appendChild( input_field );
      append_to.appendChild( col );
      setTimeout( () => {
        error_handler( { target: input } );
      } );
      if ( input_config.hasOwnProperty( 'afterAppend' ) && input_config.afterAppend ) {
        if ( typeof input_config.afterAppend === 'function' ) {
          input_config.afterAppend.apply( input_config, [
            input_config,
            input
          ] );
        }
      }
    }
  }

  function create_inputs ( inputs, append_to ) {
    if ( inputs && inputs.length ) {
      for ( let index = 0, length = inputs.length; index < length; index++ ) {
        create_input( inputs[ index ], append_to );
      }
    }
  }

  function create_row ( row_config ) {
    const row = document.createElement( 'div' );
    row.setAttribute( 'class', 'row ' + ( row_config.className ? row_config.className : '' ) );
    create_inputs( row_config.fields, row );
    return row;
  }

  if ( rows && rows.length ) {
    for ( let index = 0, length = rows.length; index < length; index++ ) {
      const row_element = create_row( rows[ index ] );
      element.appendChild( row_element );
    }
  }
}

function previusStep ( step_config ) {
  const container = document.getElementById( step_config.container_id );
  let show_index = step_config.show;
  if ( container ) {
    const current_el = container.querySelector( '[data-show="show"]' );
    const next_el_show = container.children[ show_index - 1 ];
    if ( next_el_show ) {
      current_el.setAttribute( 'data-show', 'hidden' );
      current_el.classList.remove( 'show' );
      current_el.classList.add( 'hidden' );
      show_index--;
      next_el_show.setAttribute( 'data-show', 'show' );
      next_el_show.classList.remove( 'hidden' );
      next_el_show.classList.add( 'show' );
      step_config.show = show_index;
    }
    if ( step_config.hasOwnProperty( 'onPreviusStep' ) ) {
      if ( typeof step_config.onPreviusStep === 'function' ) {
        step_config.onPreviusStep.apply( step_config, [
          show_index >= step_config.steps.length,
          show_index + 1,
          show_index,
          step_config
        ] );
      }
    }
  }
  if ( step_config.hasOwnProperty( 'buttons' ) ) {
    const conclude = document.getElementById( step_config.buttons.conclude );
    if ( !conclude.hasAttribute( 'style' ) ) { conclude.setAttribute( 'style', '' ); }
    const next = document.getElementById( step_config.buttons.next );
    if ( !next.hasAttribute( 'style' ) ) { next.setAttribute( 'style', '' ); }
    const previus = document.getElementById( step_config.buttons.previus );
    if ( !previus.hasAttribute( 'style' ) ) { previus.setAttribute( 'style', '' ); }
    if ( conclude ) {
      if ( step_config.steps.length - 1 === show_index ) {
        conclude.style.display = 'block';
      } else {
        conclude.style.display = 'none';
      }
    }
    if ( next ) {
      if ( show_index < step_config.steps.length - 1 ) {
        next.style.display = 'block';
      } else {
        next.style.display = 'none';
      }
    }
    if ( previus ) {
      if ( show_index > 0 ) {
        previus.style.display = 'block';
      } else {
        previus.style.display = 'none';
      }
    }
  }
  disablePrimitiveEtep( step_config );
}

function nextStep ( step_config, event ) {
  const container = document.getElementById( step_config.container_id );
  let show_index = step_config.show;
  if ( container ) {
    const current_el = container.querySelector( '[data-show="show"]' );
    const next_el_show = container.children[ show_index + 1 ];
    if ( next_el_show ) {
      current_el.setAttribute( 'data-show', 'hidden' );
      current_el.classList.remove( 'show' );
      current_el.classList.add( 'hidden' );
      show_index++;
      next_el_show.setAttribute( 'data-show', 'show' );
      next_el_show.classList.remove( 'hidden' );
      next_el_show.classList.add( 'show' );
      step_config.show = show_index;
    }
    if ( step_config.hasOwnProperty( 'onNextStep' ) ) {
      if ( typeof step_config.onNextStep === 'function' ) {
        step_config.onNextStep.apply( step_config, [
          show_index >= step_config.steps.length,
          show_index - 1,
          show_index,
          step_config
        ] );
      }
    }
  }
  if ( step_config.hasOwnProperty( 'buttons' ) ) {
    const conclude = document.getElementById( step_config.buttons.conclude );
    if ( !conclude.hasAttribute( 'style' ) ) { conclude.setAttribute( 'style', '' ); }
    const next = document.getElementById( step_config.buttons.next );
    if ( !next.hasAttribute( 'style' ) ) { next.setAttribute( 'style', '' ); }
    const previus = document.getElementById( step_config.buttons.previus );
    if ( !previus.hasAttribute( 'style' ) ) { previus.setAttribute( 'style', '' ); }
    if ( conclude ) {
      if ( step_config.steps.length - 1 === show_index ) {
        conclude.style.display = 'block';
      } else {
        conclude.style.display = 'none';
      }
    }
    if ( next ) {
      if ( show_index < step_config.steps.length - 1 ) {
        next.style.display = 'block';
      } else {
        next.style.display = 'none';
      }
    }
    if ( previus ) {
      if ( show_index > 0 ) {
        previus.style.display = 'block';
      } else {
        previus.style.display = 'none';
      }
    }
  }
  disablePrimitiveEtep( step_config );
}

function concludeAllStep ( step_config, event ) {
  if ( step_config.hasOwnProperty( 'onConclude' ) ) {
    if ( typeof step_config[ 'onConclude' ] === 'function' ) {
      step_config[ 'onConclude' ].apply( step_config, [ step_config, event ] );
    }
  }
}

function build_steps ( step_config ) {
  const container = document.getElementById( step_config.container_id );
  const show_index = step_config.show;
  step_config.setValue = setValue.bind( step_config );
  step_config.setFocus = setFocus.bind( step_config );
  step_config.model = {};
  if ( step_config.hasOwnProperty( 'buttons' ) ) {
    const conclude = document.getElementById( step_config.buttons.conclude );
    if ( !conclude.hasAttribute( 'style' ) ) { conclude.setAttribute( 'style', '' ); }
    const next = document.getElementById( step_config.buttons.next );
    if ( !next.hasAttribute( 'style' ) ) { next.setAttribute( 'style', '' ); }
    const previus = document.getElementById( step_config.buttons.previus );
    if ( !previus.hasAttribute( 'style' ) ) { previus.setAttribute( 'style', '' ); }
    if ( conclude ) {
      conclude.addEventListener( 'click', function Conclude ( e ) {
        concludeAllStep( step_config, e );
      } );
      if ( step_config.steps.length - 1 === show_index ) {
        conclude.style.display = 'block';
      } else {
        conclude.style.display = 'none';
      }
    }
    if ( next ) {
      next.addEventListener( 'click', function Next ( e ) {
        nextStep( step_config, e );
      } );
      if ( show_index < step_config.steps.length - 1 ) {
        next.style.display = 'block';
      } else {
        next.style.display = 'none';
      }
    }
    if ( previus ) {
      previus.addEventListener( 'click', function Previus ( e ) {
        previusStep( step_config, e );
      } );
      if ( show_index > 0 ) {
        previus.style.display = 'block';
      } else {
        previus.style.display = 'none';
      }
    }
  }
  if ( container ) {
    for ( let index = 0, length = step_config.steps.length; index < length; index++ ) {
      const element = step_config.steps[ index ];
      const step = document.createElement( 'div' );
      const id = ID();
      step.setAttribute( 'class', 'step ' + ( show_index === index ? 'show' : 'hidden' ) );
      step.setAttribute( 'id', id );
      step.setAttribute( 'data-show', show_index === index ? 'show' : 'hidden' );
      build_form( element.rows, step, step_config );
      container.appendChild( step );
    }
  }
}