this['nojs.kt'] = function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    rx: Kotlin.definePackage(null, /** @lends _.rx */ {
      Observer: Kotlin.createTrait(null),
      Observable: Kotlin.createClass(null, function Observable() {
      })
    }),
    example: Kotlin.definePackage(null, /** @lends _.example */ {
      main_kand9s$f: function () {
        console.log('hello clicked');
        _.pl.mareklangiewicz.nojs.alert_za3rmp$('hello clicked');
      },
      f: function (closure$counter) {
        return function (it) {
          closure$counter.start();
        };
      },
      f_0: function (closure$counter) {
        return function () {
          this.unaryPlus('start');
          this.on('click', _.example.f(closure$counter));
        };
      },
      f_1: function (closure$counter) {
        return function (it) {
          closure$counter.stop();
        };
      },
      f_2: function (closure$counter) {
        return function () {
          this.unaryPlus('stop');
          this.on('click', _.example.f_1(closure$counter));
        };
      },
      f_3: function (closure$counter) {
        return function () {
          this.unaryPlus('counter controls ');
          this.unaryPlus(_.pl.mareklangiewicz.nojs.button_cu27mk$([], _.example.f_0(closure$counter)));
          this.unaryPlus(_.pl.mareklangiewicz.nojs.button_cu27mk$([], _.example.f_2(closure$counter)));
        };
      },
      f_4: function () {
        this.unaryPlus('Minimalist DSL in Kotlin for NOH library');
      },
      f_5: function () {
        this.unaryPlus('Hi there');
      },
      f_6: function () {
        this.unaryPlus('some italic sentence.. ');
      },
      f_7: function () {
        this.unaryPlus('and some strong sentence! ');
      },
      f_8: function () {
        this.unaryPlus('what else.. ');
        this.unaryPlus(_.pl.mareklangiewicz.nojs.br());
        this.unaryPlus(_.pl.mareklangiewicz.nojs.i_cu27mk$([], _.example.f_6));
        this.unaryPlus(_.pl.mareklangiewicz.nojs.br());
        this.unaryPlus(_.pl.mareklangiewicz.nojs.strong_cu27mk$([], _.example.f_7));
      },
      f_9: function () {
        this.unaryPlus('some paragraph');
      },
      f_10: function () {
        this.unaryPlus('some other paragraph');
      },
      f_11: function (it) {
        Kotlin.println(it);
        _.pl.mareklangiewicz.nojs.alert_za3rmp$('click on table - event: ' + it);
      },
      f_12: function () {
        this.unaryPlus('head1');
      },
      f_13: function () {
        this.unaryPlus('head2');
      },
      f_14: function () {
        this.unaryPlus('head3');
      },
      f_15: function () {
        this.unaryPlus(_.pl.mareklangiewicz.nojs.th_cu27mk$([], _.example.f_12));
        this.unaryPlus(_.pl.mareklangiewicz.nojs.th_cu27mk$([], _.example.f_13));
        this.unaryPlus(_.pl.mareklangiewicz.nojs.th_cu27mk$([], _.example.f_14));
      },
      f_16: function () {
        this.unaryPlus('row1col1');
      },
      f_17: function () {
        this.css('border', 'double');
        this.unaryPlus('row1col2');
      },
      f_18: function () {
        this.unaryPlus('row1col3');
      },
      f_19: function () {
        this.unaryPlus(_.pl.mareklangiewicz.nojs.td_cu27mk$([], _.example.f_16));
        this.unaryPlus(_.pl.mareklangiewicz.nojs.td_cu27mk$([], _.example.f_17));
        this.unaryPlus(_.pl.mareklangiewicz.nojs.td_cu27mk$([], _.example.f_18));
      },
      f_20: function () {
        this.css('border', 'solid');
        this.unaryPlus('row2col1');
      },
      f_21: function () {
        this.unaryPlus('row2col2');
      },
      f_22: function () {
        this.unaryPlus('row2col3');
      },
      f_23: function () {
        this.unaryPlus(_.pl.mareklangiewicz.nojs.td_cu27mk$([], _.example.f_20));
        this.unaryPlus(_.pl.mareklangiewicz.nojs.td_cu27mk$([], _.example.f_21));
        this.unaryPlus(_.pl.mareklangiewicz.nojs.td_cu27mk$([], _.example.f_22));
      },
      f_24: function () {
        this.on('click', _.example.f_11);
        this.css('border', 'solid');
        this.unaryPlus(_.pl.mareklangiewicz.nojs.tr_cu27mk$([], _.example.f_15));
        this.unaryPlus(_.pl.mareklangiewicz.nojs.tr_cu27mk$([], _.example.f_19));
        this.unaryPlus(_.pl.mareklangiewicz.nojs.tr_cu27mk$([], _.example.f_23));
      },
      f_25: function () {
        this.unaryPlus('some math computations');
      },
      f_26: function () {
        this.unaryPlus('x');
      },
      f_27: function () {
        this.unaryPlus('sin(x)');
      },
      f_28: function () {
        this.unaryPlus('cos(x)');
      },
      f_29: function () {
        this.unaryPlus('x*x');
      },
      f_30: function () {
        this.unaryPlus(_.pl.mareklangiewicz.nojs.th_cu27mk$([], _.example.f_26).css('border', 'solid 1px'));
        this.unaryPlus(_.pl.mareklangiewicz.nojs.th_cu27mk$([], _.example.f_27).css('border', 'solid 1px'));
        this.unaryPlus(_.pl.mareklangiewicz.nojs.th_cu27mk$([], _.example.f_28).css('border', 'solid 1px'));
        this.unaryPlus(_.pl.mareklangiewicz.nojs.th_cu27mk$([], _.example.f_29).css('border', 'solid 1px'));
      },
      f_32: function (closure$it) {
        return function () {
          this.unaryPlus(closure$it.toString());
        };
      },
      f_33: function (closure$it) {
        return function () {
          this.unaryPlus(Math.sin(closure$it).toString());
        };
      },
      f_34: function (closure$it) {
        return function () {
          this.unaryPlus(Math.cos(closure$it).toString());
        };
      },
      f_35: function (closure$it) {
        return function () {
          this.unaryPlus((closure$it * closure$it).toString());
        };
      },
      f_36: function (closure$it) {
        return function () {
          this.unaryPlus(_.pl.mareklangiewicz.nojs.td_cu27mk$([], _.example.f_32(closure$it)));
          this.unaryPlus(_.pl.mareklangiewicz.nojs.td_cu27mk$([], _.example.f_33(closure$it)));
          this.unaryPlus(_.pl.mareklangiewicz.nojs.td_cu27mk$([], _.example.f_34(closure$it)));
          this.unaryPlus(_.pl.mareklangiewicz.nojs.td_cu27mk$([], _.example.f_35(closure$it)));
        };
      },
      f_38: function () {
        this.unaryPlus(_.pl.mareklangiewicz.nojs.tr_cu27mk$([], _.example.f_30));
        var $receiver = new Kotlin.NumberRange(1, 20);
        var destination = new Kotlin.ArrayList(Kotlin.kotlin.collections.collectionSizeOrDefault($receiver, 10));
        var tmp$1;
        tmp$1 = $receiver.iterator();
        while (tmp$1.hasNext()) {
          var item = tmp$1.next();
          destination.add_za3rmp$(item / 10.0);
        }
        var tmp$4;
        tmp$4 = destination.iterator();
        while (tmp$4.hasNext()) {
          var element = tmp$4.next();
          this.unaryPlus(_.pl.mareklangiewicz.nojs.tr_cu27mk$([], _.example.f_36(element)));
        }
      },
      f_39: function () {
        this.unaryPlus(_.pl.mareklangiewicz.nojs.table_cu27mk$([Kotlin.kotlin.to_l1ob02$('style', 'border: double')], _.example.f_38));
      },
      f_40: function () {
      },
      f_41: function () {
        this.unaryPlus(_.pl.mareklangiewicz.nojs.img_hdnj8u$('http://mareklangiewicz.pl/face_slajd2.png', [], _.example.f_40));
      },
      f_42: function () {
        this.unaryPlus('Marek Langiewicz');
      },
      f_43: function () {
        this.unaryPlus(_.pl.mareklangiewicz.nojs.a_hdnj8u$('http://mareklangiewicz.pl', [], _.example.f_42));
      },
      f_44: function () {
        this.unaryPlus('email: marek.langiewicz@gmail.com');
      },
      f_45: function () {
        this.unaryPlus(_.pl.mareklangiewicz.nojs.a_hdnj8u$('mailto:marek.langiewicz@gmail.com', [], _.example.f_44));
      },
      f_46: function () {
        this.unaryPlus('Simple kotlin views');
      },
      f_47: function () {
        this.unaryPlus(_.pl.mareklangiewicz.nojs.h3_cu27mk$([], _.example.f_46));
        this.unaryPlus(_.example.generateSimpleKotlinViews());
      },
      main_kand9s$f_0: function (closure$counter) {
        return function () {
          this.unaryPlus(_.pl.mareklangiewicz.nojs.div_cu27mk$([], _.example.f_3(closure$counter)));
          this.unaryPlus(_.pl.mareklangiewicz.nojs.h3_cu27mk$([Kotlin.kotlin.to_l1ob02$('class', 'fancy')], _.example.f_4));
          this.unaryPlus(_.pl.mareklangiewicz.nojs.div_cu27mk$([Kotlin.kotlin.to_l1ob02$('style', 'margin: 10px;')], _.example.f_5));
          this.unaryPlus(_.pl.mareklangiewicz.nojs.div_cu27mk$([], _.example.f_8));
          this.unaryPlus(_.pl.mareklangiewicz.nojs.p_cu27mk$([], _.example.f_9));
          this.unaryPlus(_.pl.mareklangiewicz.nojs.p_cu27mk$([], _.example.f_10));
          this.unaryPlus('click on table');
          this.unaryPlus(_.pl.mareklangiewicz.nojs.table_cu27mk$([], _.example.f_24));
          this.unaryPlus(_.pl.mareklangiewicz.nojs.h4_cu27mk$([Kotlin.kotlin.to_l1ob02$('class', 'fancy')], _.example.f_25));
          this.unaryPlus(_.pl.mareklangiewicz.nojs.p_cu27mk$([], _.example.f_39));
          this.unaryPlus(_.pl.mareklangiewicz.nojs.p_cu27mk$([], _.example.f_41));
          this.unaryPlus(_.pl.mareklangiewicz.nojs.p_cu27mk$([], _.example.f_43));
          this.unaryPlus(_.pl.mareklangiewicz.nojs.p_cu27mk$([], _.example.f_45));
          this.unaryPlus(_.pl.mareklangiewicz.nojs.div_cu27mk$([Kotlin.kotlin.to_l1ob02$('style', 'border: solid 1px; margin: 15px; padding: 15px;')], _.example.f_47));
        };
      },
      main_kand9s$: function (args) {
        var tmp$0, tmp$1, tmp$2;
        var el = document.createElement('h2');
        el.setAttribute('id', 'hello');
        el.appendChild(document.createTextNode('Hello!'));
        ((tmp$0 = document.body) != null ? tmp$0 : Kotlin.throwNPE()).appendChild(el);
        var counterDiv = document.createElement('h3');
        var counterText = document.createTextNode('Counter!');
        counterDiv.appendChild(counterText);
        ((tmp$1 = document.body) != null ? tmp$1 : Kotlin.throwNPE()).appendChild(counterDiv);
        var counter = new _.example.Counter(counterText);
        counter.start();
        $('#hello').on('click', _.example.main_kand9s$f);
        var tree = _.pl.mareklangiewicz.nojs.div_cu27mk$([], _.example.main_kand9s$f_0(counter));
        tree.attachToDOM((tmp$2 = document.body) != null ? tmp$2 : Kotlin.throwNPE());
      },
      f_48: function (closure$name) {
        return function () {
          this.unaryPlus(closure$name);
        };
      },
      f_49: function (closure$content) {
        return function () {
          this.unaryPlus(closure$content);
        };
      },
      f_50: function (closure$action) {
        return function (it) {
          closure$action.second();
        };
      },
      f_51: function (closure$action) {
        return function () {
          this.unaryPlus(closure$action.first);
          this.on('click', _.example.f_50(closure$action));
        };
      },
      f_52: function (closure$actions) {
        return function () {
          var tmp$0, tmp$2;
          tmp$0 = closure$actions;
          for (tmp$2 = 0; tmp$2 !== tmp$0.length; ++tmp$2) {
            var action = tmp$0[tmp$2];
            this.unaryPlus(_.pl.mareklangiewicz.nojs.button_cu27mk$([], _.example.f_51(action)));
          }
        };
      },
      test_ilc35x$f: function (closure$name, closure$content, closure$actions) {
        return function () {
          this.unaryPlus(_.pl.mareklangiewicz.nojs.h4_cu27mk$([], _.example.f_48(closure$name)));
          this.unaryPlus(_.pl.mareklangiewicz.nojs.div_cu27mk$([Kotlin.kotlin.to_l1ob02$('style', 'border: solid 1px; margin: 10px; padding: 10px;')], _.example.f_49(closure$content)));
          this.unaryPlus(_.pl.mareklangiewicz.nojs.div_cu27mk$([], _.example.f_52(closure$actions)));
        };
      },
      test_ilc35x$: function (name, content, actions) {
        return _.pl.mareklangiewicz.nojs.div_cu27mk$([Kotlin.kotlin.to_l1ob02$('style', 'border: double; margin: 5px; padding: 5px;')], _.example.test_ilc35x$f(name, content, actions));
      },
      f_53: function () {
        this.unaryPlus('initial value');
      },
      f_54: function (closure$jstv) {
        return function () {
          Kotlin.println(closure$jstv.text);
        };
      },
      f_55: function (closure$jstv) {
        return function () {
          closure$jstv.text = 'bla1';
        };
      },
      f_56: function (closure$jstv) {
        return function () {
          closure$jstv.text = 'XXXX';
        };
      },
      f_57: function (closure$jstv) {
        return function () {
          closure$jstv.text = 'YYYY';
        };
      },
      f_58: function () {
      },
      f_59: function (closure$jsiv) {
        return function () {
          Kotlin.println(closure$jsiv.imageUrl);
        };
      },
      f_60: function (closure$jsiv) {
        return function () {
          closure$jsiv.imageUrl = 'http://placehold.it/350x150';
        };
      },
      f_61: function (closure$jsiv) {
        return function () {
          closure$jsiv.imageUrl = 'http://placehold.it/250x250';
        };
      },
      f_62: function (closure$jsiv) {
        return function () {
          closure$jsiv.imageUrl = 'http://placehold.it/150x350';
        };
      },
      f_63: function () {
      },
      f_64: function (closure$jsud) {
        return function () {
          closure$jsud.pictureView.imageUrl = 'http://placehold.it/350x150';
        };
      },
      f_65: function () {
      },
      f_66: function (closure$ovly) {
        return function () {
          return closure$ovly.show();
        };
      },
      f_67: function (closure$ovly) {
        return function () {
          return closure$ovly.hide();
        };
      },
      generateSimpleKotlinViews$f: function () {
        var tvDiv = _.pl.mareklangiewicz.nojs.div_cu27mk$([], _.example.f_53);
        var jstv = new _.example.JSTextView(tvDiv);
        this.unaryPlus(_.example.test_ilc35x$('JSTextView test', tvDiv, [Kotlin.kotlin.to_l1ob02$('println(jstv.text)', _.example.f_54(jstv)), Kotlin.kotlin.to_l1ob02$('jstv.text = "bla1"', _.example.f_55(jstv)), Kotlin.kotlin.to_l1ob02$('jstv.text = "XXXX"', _.example.f_56(jstv)), Kotlin.kotlin.to_l1ob02$('jstv.text = "YYYY"', _.example.f_57(jstv))]));
        var ivImg = _.pl.mareklangiewicz.nojs.img_hdnj8u$('http://placehold.it/350x150', [], _.example.f_58);
        var jsiv = new _.example.JSImageView(ivImg);
        this.unaryPlus(_.example.test_ilc35x$('JSImageView test', ivImg, [Kotlin.kotlin.to_l1ob02$('println(jsiv.imageUrl)', _.example.f_59(jsiv)), Kotlin.kotlin.to_l1ob02$('jsiv.imageUrl = "http://placehold.it/350x150"', _.example.f_60(jsiv)), Kotlin.kotlin.to_l1ob02$('jsiv.imageUrl = "http://placehold.it/250x250"', _.example.f_61(jsiv)), Kotlin.kotlin.to_l1ob02$('jsiv.imageUrl = "http://placehold.it/150x350"', _.example.f_62(jsiv))]));
        var udDiv = _.pl.mareklangiewicz.nojs.div_cu27mk$([], _.example.f_63);
        var jsud = new _.example.JSUserDetailsView(udDiv);
        jsud.loginView.text = 'langara';
        jsud.pictureView.imageUrl = 'http://mareklangiewicz.pl/face_slajd2.png';
        jsud.nameView.text = 'Marek Langiewicz';
        jsud.locationView.text = 'Warszawa';
        jsud.emailView.text = 'marek.langiewicz@gmail.com';
        this.unaryPlus(_.example.test_ilc35x$('JSUserDetailView test', udDiv, [Kotlin.kotlin.to_l1ob02$('jsud.pictureView.imageUrl = "http://placehold.it/350x150"', _.example.f_64(jsud))]));
        var udDiv2 = _.pl.mareklangiewicz.nojs.div_cu27mk$([], _.example.f_65);
        var jsud2 = new _.example.JSUserDetailsView(udDiv2);
        jsud2.loginView.text = 'langara';
        jsud2.pictureView.imageUrl = 'http://mareklangiewicz.pl/face_slajd2.png';
        jsud2.nameView.text = 'Marek Langiewicz';
        jsud2.locationView.text = 'Warszawa';
        jsud2.emailView.text = 'marek.langiewicz@gmail.com';
        var ovly = noh.overlay().add(udDiv2.addclass('smooth').addclass('pretty')).addclass('right bottom').addclass('smooth').addclass('pretty');
        this.unaryPlus(_.example.test_ilc35x$('Overlay test', ovly, [Kotlin.kotlin.to_l1ob02$('show', _.example.f_66(ovly)), Kotlin.kotlin.to_l1ob02$('hide', _.example.f_67(ovly))]).addclass('smooth'));
      },
      generateSimpleKotlinViews: function () {
        var root = _.pl.mareklangiewicz.nojs.div_cu27mk$([], _.example.generateSimpleKotlinViews$f);
        return root;
      },
      JSTextView: Kotlin.createClass(function () {
        return [_.example.TextView];
      }, function JSTextView(element) {
        this.element = element;
      }, /** @lends _.example.JSTextView.prototype */ {
        text: {
          get: function () {
            var tmp$0;
            return (tmp$0 = this.element.dom.textContent) != null ? tmp$0 : '';
          },
          set: function (value) {
            this.element.dom.textContent = value;
          }
        }
      }),
      JSImageView: Kotlin.createClass(function () {
        return [_.example.ImageView];
      }, function JSImageView(img) {
        this.img = img;
      }, /** @lends _.example.JSImageView.prototype */ {
        imageUrl: {
          get: function () {
            return this.img.getAttr('src');
          },
          set: function (value) {
            this.img.attr('src', value);
          }
        }
      }),
      JSStartView: Kotlin.createClass(function () {
        return [_.example.StartView];
      }, function JSStartView() {
      }, /** @lends _.example.JSStartView.prototype */ {
        clearUsers: function () {
          throw new Kotlin.UnsupportedOperationException('not implemented');
        },
        addUser_6hosri$: function (login, name, pictureUrl) {
          throw new Kotlin.UnsupportedOperationException('not implemented');
        },
        loginSelects: function () {
          throw new Kotlin.UnsupportedOperationException('not implemented');
        }
      }),
      JSUserDetailsView: Kotlin.createClass(function () {
        return [_.example.UserDetailsView];
      }, function JSUserDetailsView(element) {
        this.element = element;
        this.loginInput_1emqkg$ = _.pl.mareklangiewicz.nojs.input_cu27mk$([], _.example.JSUserDetailsView.loginInput_1emqkg$f);
        this.userImg_yjdpa1$ = _.pl.mareklangiewicz.nojs.img_cu27mk$([], _.example.JSUserDetailsView.userImg_yjdpa1$f);
        this.nameText_uybmq1$ = _.pl.mareklangiewicz.nojs.div_cu27mk$([], _.example.JSUserDetailsView.nameText_uybmq1$f);
        this.locationText_u7m6fz$ = _.pl.mareklangiewicz.nojs.div_cu27mk$([], _.example.JSUserDetailsView.locationText_u7m6fz$f);
        this.emailText_lbfeae$ = _.pl.mareklangiewicz.nojs.div_cu27mk$([], _.example.JSUserDetailsView.emailText_lbfeae$f);
        var $receiver = this.element;
        $receiver.add(this.loginInput_1emqkg$);
        $receiver.add(this.userImg_yjdpa1$);
        $receiver.add(this.nameText_uybmq1$);
        $receiver.add(this.locationText_u7m6fz$);
        $receiver.add(this.emailText_lbfeae$);
        this.$loginView_dsbwpd$ = new _.example.JSTextView(this.loginInput_1emqkg$);
        this.$pictureView_aj68ho$ = new _.example.JSImageView(this.userImg_yjdpa1$);
        this.$nameView_uyaa8h$ = new _.example.JSTextView(this.nameText_uybmq1$);
        this.$locationView_u7ktyf$ = new _.example.JSTextView(this.locationText_u7m6fz$);
        this.$emailView_lbe1su$ = new _.example.JSTextView(this.emailText_lbfeae$);
      }, /** @lends _.example.JSUserDetailsView.prototype */ {
        loginView: {
          get: function () {
            return this.$loginView_dsbwpd$;
          }
        },
        pictureView: {
          get: function () {
            return this.$pictureView_aj68ho$;
          }
        },
        nameView: {
          get: function () {
            return this.$nameView_uyaa8h$;
          }
        },
        locationView: {
          get: function () {
            return this.$locationView_u7ktyf$;
          }
        },
        emailView: {
          get: function () {
            return this.$emailView_lbe1su$;
          }
        }
      }, /** @lends _.example.JSUserDetailsView */ {
        loginInput_1emqkg$f: function () {
        },
        userImg_yjdpa1$f: function () {
        },
        nameText_uybmq1$f: function () {
        },
        locationText_u7m6fz$f: function () {
        },
        emailText_lbfeae$f: function () {
        }
      }),
      Counter: Kotlin.createClass(null, function Counter(el) {
        this.el = el;
        this.started = false;
      }, /** @lends _.example.Counter.prototype */ {
        step_za3lpa$: function (n) {
          Kotlin.println(n);
          document.title = 'Counter: ' + n;
          this.el.textContent = n.toString();
          if (this.started)
            window.setTimeout(_.example.Counter.step_za3lpa$f(n, this), 1000);
        },
        start: function () {
          this.started = true;
          this.step_za3lpa$(0);
        },
        stop: function () {
          this.started = false;
        }
      }, /** @lends _.example.Counter */ {
        step_za3lpa$f: function (closure$n, this$Counter) {
          return function () {
            this$Counter.step_za3lpa$(closure$n + 1);
          };
        }
      }),
      View: Kotlin.createTrait(null),
      TextView: Kotlin.createTrait(null),
      EditText: Kotlin.createTrait(function () {
        return [_.example.TextView];
      }),
      ImageView: Kotlin.createTrait(null),
      StartView: Kotlin.createTrait(function () {
        return [_.example.View];
      }),
      UserDetailsView: Kotlin.createTrait(function () {
        return [_.example.View];
      })
    }),
    pl: Kotlin.definePackage(null, /** @lends _.pl */ {
      mareklangiewicz: Kotlin.definePackage(null, /** @lends _.pl.mareklangiewicz */ {
        nojs: Kotlin.definePackage(null, /** @lends _.pl.mareklangiewicz.nojs */ {
          alert_za3rmp$: function (msg) {
            window.alert(Kotlin.toString(msg));
          },
          attrs_at3s7d$: function ($receiver, attrs) {
            var tmp$2;
            for (tmp$2 = 0; tmp$2 !== attrs.length; ++tmp$2) {
              var attr = attrs[tmp$2];
              $receiver.attr(attr.first, attr.second);
            }
            return $receiver;
          },
          text_61zpoe$: function (text) {
            return new noh.Text(text);
          },
          h1_cu27mk$: function (attrs, init) {
            var $receiver = _.pl.mareklangiewicz.nojs.attrs_at3s7d$(new noh.Element('h1'), attrs.slice());
            init.call($receiver);
            return $receiver;
          },
          h2_cu27mk$: function (attrs, init) {
            var $receiver = _.pl.mareklangiewicz.nojs.attrs_at3s7d$(new noh.Element('h2'), attrs.slice());
            init.call($receiver);
            return $receiver;
          },
          h3_cu27mk$: function (attrs, init) {
            var $receiver = _.pl.mareklangiewicz.nojs.attrs_at3s7d$(new noh.Element('h3'), attrs.slice());
            init.call($receiver);
            return $receiver;
          },
          h4_cu27mk$: function (attrs, init) {
            var $receiver = _.pl.mareklangiewicz.nojs.attrs_at3s7d$(new noh.Element('h4'), attrs.slice());
            init.call($receiver);
            return $receiver;
          },
          h5_cu27mk$: function (attrs, init) {
            var $receiver = _.pl.mareklangiewicz.nojs.attrs_at3s7d$(new noh.Element('h5'), attrs.slice());
            init.call($receiver);
            return $receiver;
          },
          h6_cu27mk$: function (attrs, init) {
            var $receiver = _.pl.mareklangiewicz.nojs.attrs_at3s7d$(new noh.Element('h6'), attrs.slice());
            init.call($receiver);
            return $receiver;
          },
          body_cu27mk$: function (attrs, init) {
            var $receiver = _.pl.mareklangiewicz.nojs.attrs_at3s7d$(new noh.Element('body'), attrs.slice());
            init.call($receiver);
            return $receiver;
          },
          div_cu27mk$: function (attrs, init) {
            var $receiver = _.pl.mareklangiewicz.nojs.attrs_at3s7d$(new noh.Element('div'), attrs.slice());
            init.call($receiver);
            return $receiver;
          },
          br: function () {
            return new noh.Element('br');
          },
          link_cu27mk$: function (attrs, init) {
            var $receiver = _.pl.mareklangiewicz.nojs.attrs_at3s7d$(new noh.Element('link'), attrs.slice());
            init.call($receiver);
            return $receiver;
          },
          p_cu27mk$: function (attrs, init) {
            var $receiver = _.pl.mareklangiewicz.nojs.attrs_at3s7d$(new noh.Element('p'), attrs.slice());
            init.call($receiver);
            return $receiver;
          },
          i_cu27mk$: function (attrs, init) {
            var $receiver = _.pl.mareklangiewicz.nojs.attrs_at3s7d$(new noh.Element('i'), attrs.slice());
            init.call($receiver);
            return $receiver;
          },
          em_cu27mk$: function (attrs, init) {
            var $receiver = _.pl.mareklangiewicz.nojs.attrs_at3s7d$(new noh.Element('em'), attrs.slice());
            init.call($receiver);
            return $receiver;
          },
          strong_cu27mk$: function (attrs, init) {
            var $receiver = _.pl.mareklangiewicz.nojs.attrs_at3s7d$(new noh.Element('strong'), attrs.slice());
            init.call($receiver);
            return $receiver;
          },
          span_cu27mk$: function (attrs, init) {
            var $receiver = _.pl.mareklangiewicz.nojs.attrs_at3s7d$(new noh.Element('span'), attrs.slice());
            init.call($receiver);
            return $receiver;
          },
          a_cu27mk$: function (attrs, init) {
            var $receiver = _.pl.mareklangiewicz.nojs.attrs_at3s7d$(new noh.Element('a'), attrs.slice());
            init.call($receiver);
            return $receiver;
          },
          a_hdnj8u$: function (href, attrs, init) {
            var $receiver = _.pl.mareklangiewicz.nojs.attrs_at3s7d$((new noh.Element('a')).attr('href', href), attrs.slice());
            init.call($receiver);
            return $receiver;
          },
          img_cu27mk$: function (attrs, init) {
            var $receiver = _.pl.mareklangiewicz.nojs.attrs_at3s7d$(new noh.Element('img'), attrs.slice());
            init.call($receiver);
            return $receiver;
          },
          img_hdnj8u$: function (src, attrs, init) {
            var $receiver = _.pl.mareklangiewicz.nojs.attrs_at3s7d$((new noh.Element('img')).attr('src', src), attrs.slice());
            init.call($receiver);
            return $receiver;
          },
          hr: function () {
            return new noh.Element('hr');
          },
          table_cu27mk$: function (attrs, init) {
            var $receiver = _.pl.mareklangiewicz.nojs.attrs_at3s7d$(new noh.Element('table'), attrs.slice());
            init.call($receiver);
            return $receiver;
          },
          tr_cu27mk$: function (attrs, init) {
            var $receiver = _.pl.mareklangiewicz.nojs.attrs_at3s7d$(new noh.Element('tr'), attrs.slice());
            init.call($receiver);
            return $receiver;
          },
          th_cu27mk$: function (attrs, init) {
            var $receiver = _.pl.mareklangiewicz.nojs.attrs_at3s7d$(new noh.Element('th'), attrs.slice());
            init.call($receiver);
            return $receiver;
          },
          td_cu27mk$: function (attrs, init) {
            var $receiver = _.pl.mareklangiewicz.nojs.attrs_at3s7d$(new noh.Element('td'), attrs.slice());
            init.call($receiver);
            return $receiver;
          },
          ul_cu27mk$: function (attrs, init) {
            var $receiver = _.pl.mareklangiewicz.nojs.attrs_at3s7d$(new noh.Element('ul'), attrs.slice());
            init.call($receiver);
            return $receiver;
          },
          ol_cu27mk$: function (attrs, init) {
            var $receiver = _.pl.mareklangiewicz.nojs.attrs_at3s7d$(new noh.Element('ol'), attrs.slice());
            init.call($receiver);
            return $receiver;
          },
          li_cu27mk$: function (attrs, init) {
            var $receiver = _.pl.mareklangiewicz.nojs.attrs_at3s7d$(new noh.Element('li'), attrs.slice());
            init.call($receiver);
            return $receiver;
          },
          pre_cu27mk$: function (attrs, init) {
            var $receiver = _.pl.mareklangiewicz.nojs.attrs_at3s7d$(new noh.Element('pre'), attrs.slice());
            init.call($receiver);
            return $receiver;
          },
          button_cu27mk$: function (attrs, init) {
            var $receiver = _.pl.mareklangiewicz.nojs.attrs_at3s7d$(new noh.Element('button'), attrs.slice());
            init.call($receiver);
            return $receiver;
          },
          input_cu27mk$: function (attrs, init) {
            var $receiver = _.pl.mareklangiewicz.nojs.attrs_at3s7d$(new noh.Element('input'), attrs.slice());
            init.call($receiver);
            return $receiver;
          }
        })
      })
    })
  });
  Kotlin.defineModule('nojs.kt', _);
  _.example.main_kand9s$([]);
  return _;
}(kotlin);
