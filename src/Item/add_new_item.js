import React, { Component } from 'react'
import KumoInputBox from '../elements/kumoInputBox';
import KumoButton from '../elements/kumoButton';

class AddItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null,
            price: [],
            category: [],
            categories_list: ''
        }
    }

    componentDidMount() {
        fetch('http://restaurant.com:5005/price')
            .then(res => res.json())
            .then(
                data => this.setState({ price: data }),
                error => this.setState({ error })
            )
    }

    componentDidMount() {
        fetch('http://restaurant.com:5005/category')
            .then(res => res.json())
            .then(
                data => this.setState({ category: data }),
                error => this.setState({ error })
            )
    }


    handleChange = (event) => {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }

    resetFile = (event) => {
        event.preventDefault();
        this.setState({ file: null });
    }

    render() {
        const { product_name, price, categories_list, description, image } = this.props;
        return (
            <div className="container-fluid bg-dark p-3">
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-4 bg-light d-flex align-items-center">
                        <figure className="figure mx-auto">
                            {this.state.file && (
                                <img className="img-thumbnail" alt="Item" src={this.state.file} value={image} style={{ width: "100%" }} />
                            )}
                            <figcaption className="figure-caption" style={{ textAlign: 'center' }}>Item Image</figcaption>
                        </figure>
                    </div>

                    <div className="col-lg-4 col-md-4 bg-light p-3">
                        <h3 style={{ textAlign: 'center' }}>Add Item</h3>

                        <label>Item_Name</label>
                        <KumoInputBox placeholder='ProductName' value={product_name} />

                        <label>Price</label>
                        {/* <KumoInputBox placeholder='Price' value={price}/> */}
                        <select className="browser-default custom-select">
                            <option defaultValue="selected">Choose Price</option>
                            <option defaultValue={this.price}>
                                {this.price}
                            </option>
                        </select>

                        <label>Category</label>
                        <select className="browser-default custom-select">
                            <option defaultValue="selected">Choose Category</option>
                            <option defaultValue={this.categories_lists}>
                                {this.categories_lists}
                            </option>
                            {/* {this.state.category.map((categories) => {
                                 <option key={categories.id}>
                                    {categories.categories_list}
                                 </option>
                             })} */}
                        </select>

                        <label>Description</label>
                        <textarea placeholder='Description' type="text" value={description} className="form-control" />

                        <label>Image</label><br />
                        <input type="file" onChange={this.handleChange} value={image} />

                        <KumoButton text="Add" className="mt-4"></KumoButton>
                    </div>
                </div>
            </div>

        )
    }

}
export default AddItem;