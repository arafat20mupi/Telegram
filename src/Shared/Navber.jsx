import { CButton, CCloseButton, CContainer, CDropdown, CDropdownDivider, CDropdownItem, CDropdownMenu, CDropdownToggle, CForm, CFormInput, CNavbar, CNavbarBrand, CNavbarNav, CNavbarToggler, CNavItem, CNavLink, COffcanvas, COffcanvasBody, COffcanvasHeader, COffcanvasTitle } from "@coreui/react";
import { useState } from "react";
const Navber = () => {
    const [visible, setVisible] = useState(false)
    return (
        <CNavbar color="primary " className="" expand="xxl">
            <CContainer className=" " fluid>
                <CNavbarToggler 
                    aria-controls="offcanvasNavbar2"
                    aria-label="Toggle navigation"
                    onClick={() => setVisible(!visible)}
                />
                <CNavbarBrand className=" text-white">Telegram</CNavbarBrand>
                <COffcanvas id="offcanvasNavbar2" placement="start" portal={false} visible={visible} onHide={() => setVisible(false)}>
                    {/* <COffcanvasHeader>
                        <COffcanvasTitle>Telegram</COffcanvasTitle>
                        <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
                    </COffcanvasHeader> */}
                    <COffcanvasBody>
                        <CNavbarNav>
                            <CNavItem>
                                <CNavLink href="#" active>
                                    Home
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink href="#">Link</CNavLink>
                            </CNavItem>
                            <CDropdown variant="nav-item" popper={false}>
                                <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
                                <CDropdownMenu>
                                    <CDropdownItem href="#">Action</CDropdownItem>
                                    <CDropdownItem href="#">Another action</CDropdownItem>
                                    <CDropdownDivider />
                                    <CDropdownItem href="#">Something else here</CDropdownItem>
                                </CDropdownMenu>
                            </CDropdown>
                            <CNavItem>
                                <CNavLink href="#" disabled>
                                    Disabled
                                </CNavLink>
                            </CNavItem>
                        </CNavbarNav>
                        <CForm className="d-flex">
                            <CFormInput type="search" className="me-2" placeholder="Search" />
                            <CButton type="submit" color="success" variant="outline">
                                Search
                            </CButton>
                        </CForm>
                    </COffcanvasBody>
                </COffcanvas>
            </CContainer>
        </CNavbar>

    );
};

export default Navber;