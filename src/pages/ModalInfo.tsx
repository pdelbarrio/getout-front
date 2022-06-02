import Modal from "../components/Modal";
import { ButtonModal, Container } from "../ui/Modal";

export type Props = {
  stateModal: boolean;
  setStateModal: () => void;
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
        <span>GET OUT!</span>
        <ButtonModal onClick={() => setStateModal(!stateModal)}>
          I GET IT!
        </ButtonModal>
      </Container>
    </Modal>
  );
}

export default ModalInfo;
