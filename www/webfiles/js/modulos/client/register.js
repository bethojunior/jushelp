viewController.setObserver( "Signup", function () {

	const steppers_config = {
		steps: [
			{
				rows: [
					{
						fields: [
							{
								key: 'nome',
								type: 'text',
								label: 'Nome completo: ',
								validations: {
									required: function ( value ) {
										if ( !value || ( value.toString() ).length === 0 ) {
											return { message: 'Compo obrigatório!' };
										}
									},
									minlength: function ( value ) {
										if ( value && value.toString().length < 3 ) {
											return { message: 'Tamanho mínimo 3 caracteres!' }
										}
									},
									minlength: function ( value ) {
										if ( value && value.toString().length > 512 ) {
											return { message: 'Tamanho máximo 512 caracteres!' }
										}
									}
								},
								prefix_icon: 'account_circle'
							},
							{
								key: 'cpf',
								type: 'text',
								label: 'CPF: ',
								validations: {
									required: function ( value ) {
										if ( !value || ( value.toString() ).length === 0 ) {
											return { message: 'Compo obrigatório!' };
										}
									},
									cpf: function ( value ) {
										if ( value && value.toString().length ) {
											if ( !/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test( value.toString() ) ) {
												return { message: 'CPF inválido!' }
											}
										}
									}
								},
								prefix_icon: 'subtitles',
								afterAppend: function ( config ) {
									setTimeout( function () {
										Mask.setMaskCpf( '#' + config.id );
									} );
								}
							},
							{
								key: 'rg',
								type: 'text',
								label: 'RG: ',
								validations: {
									required: function ( value ) {
										if ( !value || ( value.toString() ).length === 0 ) {
											return { message: 'Compo obrigatório!' };
										}
									},
									rg: function ( value ) {
										if ( value && value.toString().length ) {
											if ( !/(^(\d{2}\x2E\d{3}\x2E\d{3}[-]\d{1})$|^(\d{2}\x2E\d{3}\x2E\d{3})$)/.test( value.toString() ) ) {
												return { message: 'RG inválido!' }
											}
										}
									}
								},
								prefix_icon: 'subtitles',
								afterAppend: function ( config ) {
									setTimeout( function () {
										Mask.setMaskRg( '#' + config.id );
									} );
								}
							},
							{
								key: 'carteira_oab',
								type: 'text',
								label: 'Carteira OAB: ',
								validations: {
									required: function ( value ) {
										if ( !value || ( value.toString() ).length === 0 ) {
											return { message: 'Compo obrigatório!' };
										}
									}
								},
								prefix_icon: 'gavel'
							},
							{
								key: 'email',
								type: 'email',
								label: 'E-mail: ',
								validations: {
									required: function ( value ) {
										if ( !value || ( value.toString() ).length === 0 ) {
											return { message: 'Compo obrigatório!' };
										}
									},
									email: function ( value ) {
										if ( !value || ( value.toString() ).length ) {
											if ( !/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test( value ) ) {
												return { message: 'E-mail inválido!' };
											}
										}
									}
								},
								prefix_icon: 'email'
							},
							{
								key: 'numero',
								type: 'tel',
								label: 'Telefone: ',
								validations: {
									required: function ( value ) {
										if ( !value || ( value.toString() ).length === 0 ) {
											return { message: 'Compo obrigatório!' };
										}
									},
									phone: function () { }
								},
								prefix_icon: 'phone',
								afterAppend: function ( config ) {
									setTimeout( function () {
										Mask.setMaskPhone( '#' + config.id );
									} );
								}
							},
						]
					}
				],
			},
			{
				rows: [
					{
						fields: [
							{
								key: 'endereco_cep'/* TESTE COM O SERGUINTE CEP: 06233-030 */,
								type: 'text',
								label: 'CEP: ',
								validations: {
									required: function ( value ) {
										if ( !value || ( value.toString() ).length === 0 ) {
											return { message: 'Compo obrigatório!' };
										}
									},
									cep: function ( value ) {
										if ( !value || ( value.toString() ).length ) {
											if ( !/[0-9]{5}-[0-9]{3}/gim.test( value.toString() ) ) {
												return { message: 'Compo inválido!' };
											}
										}
									},
								},
								afterAppend: function ( config ) {
									setTimeout( function () {
										Mask.setMaskCep( '#' + config.id );
									}, 100 );
								},
								on: {
									keyup: function ( config, config_steps ) {
										if ( config.value.length === 9 ) {
											CustomerController.getDataCep( config.value )
												.then( resolve => {
													if ( resolve.status === 1 ) {
														config_steps.setValue( 'endereco_cidade', resolve.city + ' / ' + resolve.state )
														config_steps.setValue( 'endereco_bairro', resolve.district )
														config_steps.setValue( 'endereco_logradouro', resolve.address );
														config_steps.setFocus( 'endereco_numero' );
													}
												} );
										}
									}
								}
							},
							{
								key: 'endereco_cidade',
								type: 'text',
								label: 'Cidade: ',
								validations: {
									required: function ( value ) {
										if ( !value || ( value.toString() ).length === 0 ) {
											return { message: 'Compo obrigatório!' };
										}
									},
								},
							},
							{
								key: 'endereco_bairro',
								type: 'text',
								label: 'Bairro: ',
								validations: {
									required: function ( value ) {
										if ( !value || ( value.toString() ).length === 0 ) {
											return { message: 'Compo obrigatório!' };
										}
									},
								},
							},
							{
								key: 'endereco_numero',
								type: 'text',
								label: 'Número: ',
								validations: {
									required: function ( value ) {
										if ( !value || ( value.toString() ).length === 0 ) {
											return { message: 'Compo obrigatório!' };
										}
									},
								},
							},
							{
								key: 'endereco_logradouro',
								type: 'text',
								label: 'Logradouro: ',
								validations: {
									required: function ( value ) {
										if ( !value || ( value.toString() ).length === 0 ) {
											return { message: 'Compo obrigatório!' };
										}
									},
								},
							},
							{
								key: 'endereco_complemento',
								type: 'text',
								label: 'Complemento: ',
								validations: {
									required: function ( value ) {
										if ( !value || ( value.toString() ).length === 0 ) {
											return { message: 'Compo obrigatório!' };
										}
									},
								},
							},
							{
								key: 'endereco_pt_referencia',
								type: 'text',
								label: 'Referência: ',
								validations: {},
							},
						]
					}
				],
			}
		],
		show: 0,
		container_id: 'lawer_container_steps',
		buttons: {
			next: 'next_step',
			previus: 'previus_step',
			conclude: 'conclude_form'
		},
		onConclude: function ( step_config ) {
			const model = step_config.model;
			RegisterService.registerLawyer( model )
				.then( ( response ) => {
					if ( response.status === 1 ) {
						console.log( 'response', response );
					} else {
						Materialize.toast( response.msg || 'Error ao inserir registro!', 1500 );
					}
				} );
		}
	};

	build_steps( steppers_config );

	let elementProperty = new ElementProperty();

	Mask.setMaskPhone( '#firstContact' );
	Mask.setMaskPhone( '#secondContact' );

	elementProperty.addEventInElement( '#backLogin', 'onclick', function () {
		Route.redirectDynamic( 'Main', 'Login' )
	} );

	elementProperty.addEventInElement( '#imgUser', 'onclick', function () {
		Materialize.toast( 'Modulo em andamento', 1500 );
		return;
		secondPass( false );
	} );

	elementProperty.addEventInElement( '#imgAdv', 'onclick', function () {
		secondPass( true );
	} );

	function secondPass ( isLawer ) {
		elementProperty.getElement( '.chooseUser', pass => {
			pass.classList.add( 'hidden' );
		} );

		if ( isLawer ) {
			elementProperty.getElement( '.userLawer', div => {
				div.classList.add( 'show' );
			} );
			return;
		}
		elementProperty.getElement( '.normalUser', div => {
			div.classList.add( 'show' );
		} );
	}

	elementProperty.addEventInElement( '.backInit', 'onclick', function () {

		elementProperty.getElement( '.userLawer', div => {
			if ( div.classList.contains( 'show' ) ) {
				div.classList.remove( 'show' );
			}
		} );

		elementProperty.getElement( '.normalUser', div => {
			if ( div.classList.contains( 'show' ) ) {
				div.classList.remove( 'show' );
			}
		} );

		elementProperty.getElement( '.chooseUser', pass => {
			pass.classList.remove( 'hidden' );
		} );

	} );

	Route.pageDynamic();

} );