import Ember from 'ember';

export default Ember.Controller.extend({
 eltipo: null,
 vehicles: Ember.String.w('Tesla Chrysler Toyota'),
  actions: {
    selectTipo(eltipo) {
      this.set('eltipo', eltipo);
       //this.sendAction('action', eltipo, this.get('product_promise'));
    },
    		createProduct(){//recibir id de tipo como producto y ponerselo sl producto
			let type = this.get('model.type_promise');
			let product = this.get('model.product');

			product.set('type', this.get('eltipo'));
				//type.save().then((t)=>{
					//product.set('type', t);
				product.save();
				//this.transitionToRoute('products/new', currentModel.type_promise);
		//	})
		}
  }
});
