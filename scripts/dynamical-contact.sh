id=$1
tasks_dir=/home/zyj/web/tasks
n_heavy_atoms=$(cat ${tasks_dir}/${id}/n_heavy_atoms)
n_ca_atoms=$(cat ${tasks_dir}/${id}/n_ca_atoms)
n_frames=$(cat ${tasks_dir}/${id}/n_frames)
cd /home/zyj/Zhao-Lab-service/Dynamical-contact
echo ${tasks_dir}/${id}/pdb_file | bash input-generator.sh
./distance ${n_heavy_atoms} ${n_ca_atoms} ${n_frames} >${tasks_dir}/${id}/result

