import Modal from "../components/Modal";
import { Dispatch, SetStateAction } from "react";
import { ButtonModal, Container } from "../ui/Modal";

export type Props = {
  stateModal: boolean;
  setStateModal: Dispatch<SetStateAction<boolean>>;
};

function ModalInfo({ stateModal, setStateModal }: Props) {
  return (
    <Modal stateModal={stateModal} setStateModal={setStateModal}>
      <Container>
        <p>
          Welcome! GET OUT BCN is a collaborative database of cool spots in
          Barcelona that don't appear in the typical guidebooks. It is divided
          into different categories. Feel free to register yourself to browse or
          to add spots to the database that you think may be interesting for
          other users.
        </p>
        <p>
          Since at the moment signin up is mandatory to access, you can see a
          video demo by clicking on the following link
          <br />
          <br />
          <a href="https://vimeo.com/720203535" target="_blank">
            VIDEODEMO
          </a>
        </p>
        <span>GET OUT!</span>
        <ButtonModal onClick={() => setStateModal(!setStateModal)}>
          I GET IT!
        </ButtonModal>
      </Container>
    </Modal>
  );
}

export default ModalInfo;
