import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderOne } from '../../components/Header';
import AdminLayout from '../../components/Layout/AdminLayout';
import { addCategory, getAllCategories } from '../../redux/actions/categoriesActions';
import { getInitialData } from '../../redux/actions/initialDataActions';
import Modal from '../../UI/modal'

const Category = () => {
    const [show, setShow] = useState(false);
    const [categoryName, setCategoryName] = useState('')
    const [parentCategoryId, setParentCategoryId] = useState('')
    const [categoryImage, setCategoryImage] = useState('')
    const category = useSelector(state => state.category)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getInitialData())
    }, [])

    const handleSave = () => {

        const form = new FormData()

        form.append('name', categoryName)
        form.append('parentId', parentCategoryId)
        form.append('categoryImage', categoryImage)
        dispatch(addCategory(form))
        setCategoryName('')
        setParentCategoryId('')


        // const cat = {
        //     categoryName,
        //     categoryImage,
        //     parentCategoryId
        // }

        // console.log(cat)


        setShow(false)
    };

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const renderCategories = (categories) => {
        let myCategories = []
        for(let category of categories){
            myCategories.push(
                <li className='categoryList'  key={category.name}>

                    <ul >{category.name}</ul>
                    {category.children.length > 0 ? (<ul>{renderCategories(category.children)} </ul>) : null}
                </li>
            )
        }

        return myCategories
        
    }

    const createCategoryList = (categories, options = []) => {
        for(let category of categories){
            options.push({value: category._id, name: category.name })
            if(category.children.length > 0){
                createCategoryList(category.children, options)
            }
        }
        return options
    }

    const handleCategoryImage = (e) => {
        setCategoryImage(e.target.files[0])
    }


    return (
      <div>
        <HeaderOne />
        <AdminLayout sidebar>
          <Container>
            <Row>
              <Col md={12}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h3>Category</h3>
                  <button onClick={handleShow}>Add</button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <ul>{renderCategories(category.categories)}</ul>
              </Col>
            </Row>
          </Container>
          <Modal
            show={show}
            onHide={handleClose}
            title="Add New Category"
            onClick={handleSave}
          >
            <label>Category Name</label>
            <Form.Control
              style={{ marginBottom: "10px" }}
              type="text"
              label="Name"
              placeholder="Category Name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
            <select
              className="form-control"
              value={parentCategoryId}
              onChange={(e) => setParentCategoryId(e.target.value)}
            >
              <option>Select Category</option>
              {createCategoryList(category.categories).map((option) => (
                <option key={option.value} value={option.value}>
                  {option.name}{" "}
                </option>
              ))}
            </select>

            <input
              type="file"
              name="categoryImage"
              onChange={handleCategoryImage}
            />
          </Modal>
        </AdminLayout>
      </div>
    );
};

export default Category;