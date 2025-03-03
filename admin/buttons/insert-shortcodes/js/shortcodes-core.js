(function($){
    $(function(){
        $('body').on('grav-editor-ready', function() {
            var Instance = Grav.default.Forms.Fields.EditorField.Instance;
            Instance.addButton({
                shortcodes: {
                    identifier: 'shortcodes',
                    title: 'Shortcodes Core',
                    label: '<i class="fa fa-fw fa-th"></i>',
                    modes: ['gfm', 'markdown'],
                    children: [
                        {
                            'shortcodes-alignleft': {
                                identifier: 'shortcodes-alignleft',
                                title: 'AlignLeft',
                                label: '<i class="fa fa-fw fa-align-left"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;
                                    button.on('click.editor.shortcodes-alignleft', function() {
                                        Instance.buttonStrategies.replaceSelections({ token: '$1', template: '[left]$1[/left]', codemirror: codemirror});
                                       codemirror.focus();
                                    });
                                }
                            }
                        },
                        {
                            'shortcodes-aligncenter': {
                                identifier: 'shortcodes-aligncenter',
                                title: 'AlignCenter',
                                label: '<i class="fa fa-fw fa-align-center"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;
                                    button.on('click.editor.shortcodes-aligncenter', function() {
                                        Instance.buttonStrategies.replaceSelections({ token: '$1', template: '[center]$1[/center]', codemirror: codemirror});
                                       codemirror.focus();
                                    });
                                }
                            }
                        },
                        {
                            'shortcodes-alignright': {
                                identifier: 'shortcodes-alignright',
                                title: 'AlignRight',
                                label: '<i class="fa fa-fw fa-align-right"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;
                                    button.on('click.editor.shortcodes-alignright', function() {
                                        Instance.buttonStrategies.replaceSelections({ token: '$1', template: '[right]$1[/right]', codemirror: codemirror});
                                       codemirror.focus();
                                    });
                                }
                            }
                        },
                        {
                            'shortcodes-column': {
                                identifier: 'shortcodes-column',
                                title: 'Column',
                                label: '<i class="fa fa-fw fa-columns"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;
                                    button.on('click.editor.shortcodes-column', function() {
                                        Instance.buttonStrategies.replaceSelections({ token: '$1', template: '[columns count=3]$1[/columns]', codemirror: codemirror});
                                       codemirror.focus();
                                    });
                                }
                            }
                        },
                        {
                            'shortcodes-safeemail': {
                                identifier: 'shortcodes-safeemail',
                                title: 'SafeEmail',
                                label: '<i class="fa fa-fw fa-envelope"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;
                                    button.on('click.editor.shortcodes-safeemail', function() {
                                        Instance.buttonStrategies.replaceSelections({ token: '$1', template: '[safe-email autolink="true" icon="envelope-o"]$1[/safe-email]', codemirror: codemirror});
                                       codemirror.focus();
                                    });
                                }
                            }
                        },
                        {
                            'shortcodes-notice': {
                                identifier: 'shortcodes-notice',
                                title: 'Notice',
                                label: '<i class="fa fa-fw fa-lightbulb-o"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;
                                    button.on('click.editor.shortcodes-notice', function() {
                                        Instance.buttonStrategies.replaceSelections({ token: '$1', template: '[notice]$1[/notice]', codemirror: codemirror});
                                       codemirror.focus();
                                    });
                                }
                            }
                        },
                        {
                            'shortcodes-underline': {
                                identifier: 'shortcodes-underline',
                                title: 'Underline',
                                label: '<i class="fa fa-fw fa-underline"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;
                                    button.on('click.editor.shortcodes-underline', function() {
                                        Instance.buttonStrategies.replaceSelections({ token: '$1', template: '[u]$1[/u]', codemirror: codemirror});
                                       codemirror.focus();
                                    });
                                }
                            }
                        },
                        {
                            'shortcodes-mark': {
                                identifier: 'shortcodes-mark',
                                title: 'Mark',
                                label: '<i class="fa fa-fw fa-thumb-tack"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;
                                    button.on('click.editor.shortcodes-mark', function() {
                                        Instance.buttonStrategies.replaceSelections({ token: '$1', template: '[mark]$1[/mark]', codemirror: codemirror});
                                       codemirror.focus();
                                    });
                                }
                            }
                        },
                        {
                            'shortcodes-figure': {
                                identifier: 'shortcodes-figure',
                                title: 'Figure',
                                label: '<i class="fa fa-fw fa-picture-o"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;
                                    button.on('click.editor.shortcodes-figure', function() {
                                        Instance.buttonStrategies.replaceSelections({ token: '$1', template: '[figure id="fig1" class="image" caption="**Fig. 1** A beautiful figure."]![$1](image.png)[/figure]', codemirror: codemirror});
                                       codemirror.focus();
                                    });
                                }
                            }
                        },
                        {
                            'shortcodes-lorem-paragraph': {
                                identifier: 'shortcodes-lorem-paragraph',
                                title: 'Lorem Ipsum Generator - Paragraphs',
                                label: '<i class="fa fa-fw fa-paragraph"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;
                                    button.on('click.editor.shortcodes-lorem-paragraph', function() {
                                        Instance.buttonStrategies.replaceSelections({ token: '$1', template: '[lorem=5 /]', codemirror: codemirror});
                                       codemirror.focus();
                                    });
                                }
                            }
                        },
                        {
                            'shortcodes-lorem-sentences': {
                                identifier: 'shortcodes-lorem-sentences',
                                title: 'Lorem Ipsum Generator - Sentences',
                                label: '<i class="fa fa-fw fa-bars"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;
                                    button.on('click.editor.shortcodes-lorem-sentences', function() {
                                        Instance.buttonStrategies.replaceSelections({ token: '$1', template: '[lorem s=5 /]', codemirror: codemirror});
                                       codemirror.focus();
                                    });
                                }
                            }
                        },
                        {
                            'shortcodes-lorem-words': {
                                identifier: 'shortcodes-lorem-words',
                                title: 'Lorem Ipsum Generator - Words',
                                label: '<i class="fa fa-fw fa-align-justify"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;
                                    button.on('click.editor.shortcodes-lorem-words', function() {
                                        Instance.buttonStrategies.replaceSelections({ token: '$1', template: '[lorem w=50 /]', codemirror: codemirror});
                                       codemirror.focus();
                                    });
                                }
                            }
                        },
                        {
                            'shortcodes-size': {
                                identifier: 'shortcodes-size',
                                title: 'Text Size',
                                label: '<i class="fa fa-fw fa-text-height"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;
                                    button.on('click.editor.shortcodes-size', function() {
                                        Instance.buttonStrategies.replaceSelections({ token: '$1', template: '[size=30]$1[/size]', codemirror: codemirror});
                                       codemirror.focus();
                                    });
                                }
                            }
                        }
                    ]
                }
            });
        });
    });
})(jQuery);
